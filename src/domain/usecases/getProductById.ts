import type { Product } from '../entities/Product';
import type { ProductRepository } from '../repositories/ProductRepository';

export type GetProductById = (id: number) => Promise<Product | null>;

export const makeGetProductById =
    (repository: ProductRepository): GetProductById =>
    id =>
        repository.getProductById(id);