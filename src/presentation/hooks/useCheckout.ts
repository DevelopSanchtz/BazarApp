import { useCallback, useState } from 'react';
import type { Order } from '../../domain/entities/Order';
import { useDependencies } from '../providers/DependenciesProvider';
import { useCart } from '../state/cart/cartProvider';

export type CheckoutStatus = 'review' | 'processing' | 'success' | 'error';

export function useCheckout() {
    const { placeOrder } = useDependencies();
    const { items, summary, clearCart } = useCart();
    const [status, setStatus] = useState<CheckoutStatus>('review');
    const [order, setOrder] = useState<Order | null>(null);

    const confirmPurchase = useCallback(async () => {
        setStatus('processing');

        try {
            const confirmedOrder = await placeOrder(items);
            setOrder(confirmedOrder);
            setStatus('success');
            clearCart();
        } 
        catch {
            setStatus('error');
        }
    }, [placeOrder, items, clearCart]);

        return { status, items, summary, order, confirmPurchase };
}