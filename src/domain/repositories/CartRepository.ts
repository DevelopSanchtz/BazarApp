import type { CartItem } from '../entities/CartItem';

export interface CartRepository {
    loadCart(): Promise<CartItem[]>;
    saveCart(items: readonly CartItem[]): Promise<void>;
}