import type { CartItem } from '../../../domain/entities/CartItem';
import type { Product } from '../../../domain/entities/Product';
import {
    addProductToCart,
    decreaseQuantity,
    increaseQuantity,
    removeProductFromCart,
} from '../../../domain/usecases/cart';

export type CartAction =
    | { type: 'add'; product: Product }
    | { type: 'increase'; productId: number }
    | { type: 'decrease'; productId: number }
    | { type: 'remove'; productId: number }
    | { type: 'clear' };

export function cartReducer(
    items: readonly CartItem[],
    action: CartAction,
): readonly CartItem[] {
    switch (action.type) {
        case 'add':
        return addProductToCart(items, action.product);
        case 'increase':
        return increaseQuantity(items, action.productId);
        case 'decrease':
        return decreaseQuantity(items, action.productId);
        case 'remove':
        return removeProductFromCart(items, action.productId);
        case 'clear':
        return [];
    }
}