import type { CartItem } from '../../domain/entities/CartItem';
import type { StoredCartDto, StoredCartItemDto } from '../dto/StoredCartDto';

export const CART_STORAGE_VERSION = 1;

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null;

const isStoredCartItem = (value: unknown): value is StoredCartItemDto =>
    isRecord(value) &&
        typeof value.id === 'number' &&
        typeof value.title === 'string' &&
        typeof value.price === 'number' &&
        typeof value.description === 'string' &&
        typeof value.category === 'string' &&
        typeof value.imageUrl === 'string' &&
        typeof value.quantity === 'number' &&
        Number.isInteger(value.quantity) &&
        value.quantity >= 1;

export const toStoredCart = (items: readonly CartItem[]): StoredCartDto => ({
    version: CART_STORAGE_VERSION,
    items: items.map(({ product, quantity }) => ({ ...product, quantity })),
});

export const fromStoredCart = (data: unknown): CartItem[] => {
    if (
        !isRecord(data) ||
        data.version !== CART_STORAGE_VERSION ||
        !Array.isArray(data.items)
    ) 
    {
        return [];
    }

    return data.items
        .filter(isStoredCartItem)
        .map(({ quantity, ...product }) => ({ product, quantity }));
};