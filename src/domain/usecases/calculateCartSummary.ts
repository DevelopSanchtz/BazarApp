import type { CartItem } from '../entities/CartItem';
import type { CartSummary } from '../entities/CartSummary';

const toCents = 
    (amount: number) => Math.round(amount * 100);

export const calculateItemSubtotal = 
    (item: CartItem): number =>
        (toCents(item.product.price) * item.quantity) / 100;

export const calculateCartSummary = (
    items: readonly CartItem[],
): CartSummary => 
    {
        const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
        const totalCents = items.reduce(
            (sum, item) => sum + toCents(item.product.price) * item.quantity,
            0,
        );

        return { totalQuantity, totalPrice: totalCents / 100 };
    };