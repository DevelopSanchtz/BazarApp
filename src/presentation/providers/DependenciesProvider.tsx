import { createContext, useContext, type ReactNode } from 'react';
import type { GetProducts } from '../../domain/usecases/getProducts';
import { GetProductById } from '../../domain/usecases/getProductById';
import type { PlaceOrder } from '../../domain/usecases/placeOrder';
import { LoadCart, SaveCart } from '../../domain/usecases/CartPersistence';

export interface Dependencies {
    getProducts: GetProducts;
    getProductById: GetProductById
    placeOrder: PlaceOrder;
    loadCart: LoadCart;
    saveCart: SaveCart
}

const DependenciesContext = createContext<Dependencies | null>(null);

interface DependenciesProviderProps {
    dependencies: Dependencies;
    children: ReactNode;
}

export function DependenciesProvider({
    dependencies,
    children,
}: DependenciesProviderProps) {
    return (
        <DependenciesContext.Provider value={dependencies}>
            {children}
        </DependenciesContext.Provider>
    );
}

export function useDependencies(): Dependencies {
    const dependencies = useContext(DependenciesContext);

    if (!dependencies) {
        throw new Error(
            'useDependencies debe usarse dentro de DependenciesProvider',
        );
    }

    return dependencies;
}