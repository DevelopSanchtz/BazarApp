import type { Product } from '../../domain/entities/Product';
import type { ProductRepository } from '../../domain/repositories/ProductRepository';
import type { ProductRemoteDataSource } from '../datasources/ProductRemoteDataSource';
import { toProduct } from '../mappers/productMapper';

export class ProductRepositoryImpl implements ProductRepository {
    private cachedProducts: Product[] | null = null;
    private pendingRequest: Promise<Product[]> | null = null;

    constructor(private readonly remoteDataSource: ProductRemoteDataSource) {}

    getProducts(): Promise<Product[]> {
        if (this.cachedProducts) {
            return Promise.resolve(this.cachedProducts);
        }

    if (!this.pendingRequest) {
        this.pendingRequest = this.remoteDataSource
            .fetchProducts()
            .then(dtos => {
                this.cachedProducts = dtos.map(toProduct);
                return this.cachedProducts;
            })
        .finally(() => {
            this.pendingRequest = null;
        });
    }

    return this.pendingRequest;
  }

    async getProductById(id: number): Promise<Product | null> {
        const products = await this.getProducts();
        return products.find(product => product.id === id) ?? null;
  }
}