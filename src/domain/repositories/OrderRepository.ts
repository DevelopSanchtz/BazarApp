import type { CartItem } from '../entities/CartItem';
import type { Order } from '../entities/Order';

export interface OrderRepository {
    placeOrder(items: readonly CartItem[]): Promise<Order>;   
}