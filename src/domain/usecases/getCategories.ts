import type { Product } from "../entities/Product";

export const getCategories = (products: readonly Product[]): string[] => [
    ...new Set(products.map(product => product.category))
]