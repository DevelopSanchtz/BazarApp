import { useCallback } from 'react';
import type { Product } from '../../domain/entities/Product';
import { useDependencies } from '../providers/DependenciesProvider';
import { useAsyncResource } from './useAsyncResource';

export function useProductDetail(productId: number) {
    const { getProductById } = useDependencies();

    const loadProduct = useCallback(
        () => getProductById(productId),
        [getProductById, productId],
    );

    const { data, status, retry } = useAsyncResource<Product | null>(
        loadProduct,
        null,
    );

    return { product: data, status, retry };
}