import type { CartItem } from '../entities/CartItem';
import type { CartRepository } from '../repositories/CartRepository';

export type LoadCart = 
    () => Promise<CartItem[]>;
export type SaveCart = 
    (items: readonly CartItem[]) => Promise<void>;

export const makeLoadCart =
    (repository: CartRepository): LoadCart =>
    () =>
        repository.loadCart();

export const makeSaveCart =
    (repository: CartRepository): SaveCart =>
    items =>
        repository.saveCart(items);