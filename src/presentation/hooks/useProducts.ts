import { useCallback, useEffect, useState } from 'react';
import { useDependencies } from '../providers/DependenciesProvider';
import { Product } from '../../domain/entities/Product';
import { useAsyncResource } from './useAsyncResource';

const NO_PRODUCTS: Product[] = []

export function useProducts() {
    const { getProducts } = useDependencies();
    const { data, status, retry } = useAsyncResource(getProducts, NO_PRODUCTS)

    return { products: data, status, retry };
}