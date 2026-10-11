import type { CartItem } from '../../domain/entities/CartItem';
import type { Order } from '../../domain/entities/Order';
import type { OrderRepository } from '../../domain/repositories/OrderRepository';
import { calculateCartSummary } from '../../domain/usecases/calculateCartSummary';

const wait = (ms: number) =>
    new Promise<void>(resolve => setTimeout(resolve, ms));

export class SimulatedOrderRepository implements OrderRepository {
    constructor(private readonly delayMs: number) {}

    async placeOrder(items: readonly CartItem[]): Promise<Order> {
        await wait(this.delayMs);

        return {
            id: `BZR-${Date.now().toString().slice(-6)}`,
            items,
            ...calculateCartSummary(items),
        };
    }
}