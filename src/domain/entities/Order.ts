import type { CartItem } from './CartItem';
import type { CartSummary } from './CartSummary';

export interface Order extends CartSummary {
    readonly id: string;
    readonly items: readonly CartItem[];
}