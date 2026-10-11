import type { CartItem } from '../../domain/entities/CartItem';
import type { CartRepository } from '../../domain/repositories/CartRepository';
import { fromStoredCart, toStoredCart } from '../mappers/cartStorageMapper';
import type { KeyValueStorage } from '../storage/KeyValueStorage';

const CART_STORAGE_KEY = 'cart';

export class LocalCartRepository implements CartRepository {
    constructor(private readonly storage: KeyValueStorage) {}

    async loadCart(): Promise<CartItem[]> {
        try {
            const storedValue = await this.storage.getItem(CART_STORAGE_KEY);
            return storedValue ? fromStoredCart(JSON.parse(storedValue)) : [];
        } 
        catch {
            return [];
        }
    }

    async saveCart(items: readonly CartItem[]): Promise<void> {
        await this.storage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(toStoredCart(items)),
        );
    }
}