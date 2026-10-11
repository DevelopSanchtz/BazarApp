import { API_CONFIG } from '../data/config/apiConfig';
import { FakeStoreProductDataSource } from '../data/datasources/ProductRemoteDataSource';
import { ProductRepositoryImpl } from '../data/repositories/ProductRepositoryImpl';
import { makeGetProductById } from '../domain/usecases/getProductById';
import { makeGetProducts } from '../domain/usecases/getProducts';
import type { Dependencies } from '../presentation/providers/DependenciesProvider';

const productDataSource = new FakeStoreProductDataSource(
    API_CONFIG.baseUrl,
    API_CONFIG.timeoutMs,
);

const productRepository = new ProductRepositoryImpl(productDataSource);

export const container: Dependencies = {
    getProducts: makeGetProducts(productRepository),
    getProductById: makeGetProductById(productRepository)
};