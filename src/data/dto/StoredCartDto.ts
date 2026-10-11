export interface StoredCartItemDto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    imageUrl: string;
    quantity: number;
}

export interface StoredCartDto {
    version: number;
    items: StoredCartItemDto[];
}