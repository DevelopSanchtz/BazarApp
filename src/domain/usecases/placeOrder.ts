import type { CartItem } from '../entities/CartItem';
import type { Order } from '../entities/Order';
import type { OrderRepository } from '../repositories/OrderRepository';

export type PlaceOrder = (items: readonly CartItem[]) => Promise<Order>;

export const makePlaceOrder =
    (repository: OrderRepository): PlaceOrder =>
        async items => {
            if (items.length === 0) {
                throw new Error('No se puede confirmar una compra con el carrito vacío');
            }

            return repository.placeOrder(items);
        };