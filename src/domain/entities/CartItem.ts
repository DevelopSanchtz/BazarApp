import type { Product } from './Product'

export interface CartItem {
    readonly product: Product;
    readonly quantity: number;
}