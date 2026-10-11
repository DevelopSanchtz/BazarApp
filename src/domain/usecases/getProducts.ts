import type { Product } from '../entities/Product';
import type { ProductRepository } from '../repositories/ProductRepository';

export type GetProducts = () => Promise<Product[]>;

export const makeGetProducts =
    (repository: ProductRepository): GetProducts =>
    () =>
        repository.getProducts();