import type { Product } from '../../../domain/entities/Product';

// TEMPORAL: datos de ejemplo. Se reemplazan por la API en el siguiente paso.
export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest.',
    category: "men's clothing",
    imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png',
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description: 'From our Legends Collection, the Naga was inspired by...',
    category: 'jewelery',
    imageUrl:
      'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png',
  },
  {
    id: 9,
    title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
    price: 64,
    description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers...',
    category: 'electronics',
    imageUrl: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png',
  },
  {
    id: 17,
    title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
    price: 39.99,
    description: 'Lightweight perfet for trip or casual wear...',
    category: "women's clothing",
    imageUrl: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png',
  },
];