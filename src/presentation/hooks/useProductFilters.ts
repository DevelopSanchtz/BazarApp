import { useMemo, useState } from "react";
import type { Product } from "../../domain/entities/Product";
import { filterProducts } from "../../domain/usecases/filterProducts";
import { getCategories } from "../../domain/usecases/getCategories";

export function useProductFilters(products: readonly Product[]) { 
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = useMemo(() => getCategories(products), [products]);

    const filteredProducts = useMemo( 
        () => filterProducts(products, { query, category: selectedCategory }),
        [products, query, selectedCategory]
    )

    return {
        query,
        setQuery,
        selectedCategory,
        setSelectedCategory,
        categories,
        filteredProducts
    }
}
