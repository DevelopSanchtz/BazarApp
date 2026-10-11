import { useCallback, useEffect, useState } from 'react';
import type { Product } from '../../domain/entities/Product';
import { useDependencies } from '../providers/DependenciesProvider';

export type LoadStatus = 'loading' | 'success' | 'error';

export function useProducts() {
    const { getProducts } = useDependencies();
    const [products, setProducts] = useState<Product[]>([]);
    const [status, setStatus] = useState<LoadStatus>('loading');

    const fetchProducts = useCallback(async () => {
        try {
            const result = await getProducts();
            setProducts(result);
            setStatus('success');
        } 
        catch {
            setStatus('error');
        }   
    }, [getProducts]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const retry = useCallback(() => {
        setStatus('loading');
        fetchProducts();
    }, [fetchProducts]);

    return { products, status, retry };
}