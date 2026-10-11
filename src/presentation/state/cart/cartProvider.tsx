import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react';
import type { CartItem } from '../../../domain/entities/CartItem';
import type { CartSummary } from '../../../domain/entities/CartSummary';
import type { Product } from '../../../domain/entities/Product';
import { calculateCartSummary } from '../../../domain/usecases/calculateCartSummary';
import { cartReducer } from './cartReducer';

interface CartContextValue {
    items: readonly CartItem[];
    summary: CartSummary;
    addToCart: (product: Product) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const EMPTY_CART: readonly CartItem[] = [];

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, dispatch] = useReducer(cartReducer, EMPTY_CART);

    const summary = useMemo(() => calculateCartSummary(items), [items]);

    const actions = useMemo(
        () => ({
            addToCart: (product: Product) => 
                dispatch({ type: 'add', product }),
            increaseQuantity: (productId: number) =>
                dispatch({ type: 'increase', productId }),
            decreaseQuantity: (productId: number) =>
                dispatch({ type: 'decrease', productId }),
            removeFromCart: (productId: number) =>
                dispatch({ type: 'remove', productId }),
            clearCart: () => 
                dispatch({ type: 'clear' }),
            }),
        [],
    );

    const value = useMemo(
        () => ({ items, summary, ...actions }),
        [items, summary, actions],
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
    const cart = useContext(CartContext);

    if (!cart) {
        throw new Error('useCart debe usarse dentro de CartProvider');
    }

    return cart;
}