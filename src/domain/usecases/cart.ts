import type { CartItem } from '../entities/CartItem';
import type { Product } from '../entities/Product';

const MIN_QUANTITY = 1;

export const canDecreaseQuantity = 
    (item: CartItem): boolean =>
        item.quantity > MIN_QUANTITY;

export const increaseQuantity = (
    items: readonly CartItem[],
    productId: number,
    ): CartItem[] =>
    items.map(item =>
        item.product.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
    );

export const decreaseQuantity = (
        items: readonly CartItem[],
        productId: number,
    ): CartItem[] =>
    items.map(item =>
        item.product.id === productId && canDecreaseQuantity(item)
            ? { ...item, quantity: item.quantity - 1 }
            : item,
    );

export const addProductToCart = (
    items: readonly CartItem[],
    product: Product,
    ): CartItem[] => {
    const isInCart = items.some(item => item.product.id === product.id);

    return isInCart
        ? increaseQuantity(items, product.id)
        : [...items, { product, quantity: 1 }];
    };

export const removeProductFromCart = (
    items: readonly CartItem[],
    productId: number,
): CartItem[] => 
    items.filter(item => item.product.id !== productId);