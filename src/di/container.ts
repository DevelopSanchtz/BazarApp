import { API_CONFIG } from '../data/config/apiConfig';
import { FakeStoreProductDataSource } from '../data/datasources/ProductRemoteDataSource';
import { ProductRepositoryImpl } from '../data/repositories/ProductRepositoryImpl';
import { SimulatedOrderRepository } from '../domain/repositories/SimulatedOrderRepository';
import { makeGetProductById } from '../domain/usecases/getProductById';
import { makeGetProducts } from '../domain/usecases/getProducts';
import { makePlaceOrder } from '../domain/usecases/placeOrder';
import type { Dependencies } from '../presentation/providers/DependenciesProvider';
import { makeLoadCart, makeSaveCart } from '../domain/usecases/CartPersistence';
import { createAsyncStorage } from '@react-native-async-storage/async-storage';
import { LocalCartRepository } from '../data/repositories/LocalCartRepository';
import { CartRepository } from '../domain/repositories/CartRepository';

const SIMULATED_CHECKOUT_DELAY_MS = 1500;
const STORAGE_NAME = 'bazar'

const productDataSource = new FakeStoreProductDataSource(
    API_CONFIG.baseUrl,
    API_CONFIG.timeoutMs,
);

const productRepository = new ProductRepositoryImpl(productDataSource);
const orderRepository = new SimulatedOrderRepository(
    SIMULATED_CHECKOUT_DELAY_MS,
);
const cartRepository = new LocalCartRepository(
    createAsyncStorage(STORAGE_NAME),
);

export const container: Dependencies = {
    getProducts: makeGetProducts(productRepository),
    getProductById: makeGetProductById(productRepository),
    placeOrder: makePlaceOrder(orderRepository),
    loadCart: makeLoadCart(cartRepository),
    saveCart: makeSaveCart(cartRepository)
};