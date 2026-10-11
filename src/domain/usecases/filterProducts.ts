import type { Product } from "../entities/Product";
import type { ProductFilters } from "../entities/ProductFilters";

const matchesCategory = (product: Product, category: string | null) =>  
    category === null || product.category === category;

const matchesQuery = (product: Product, normalizedQuery: string) => 
    product.title.toLowerCase().includes(normalizedQuery)

export const filterProducts = (
    products: readonly Product[],
    { query, category }: ProductFilters,
): Product[] => { 
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter(
        product =>
            matchesCategory(product, category) &&
            matchesQuery(product, normalizedQuery)
    );
}