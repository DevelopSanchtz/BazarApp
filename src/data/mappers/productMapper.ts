import type { Product } from '../../domain/entities/Product';
import type { ProductDto } from '../dto/ProductDto';

export const toProduct = 
    (dto: ProductDto): Product => 
({
    id: dto.id,
    title: dto.title.trim(),
    price: dto.price,
    description: dto.description.trim(),
    category: dto.category,
    imageUrl: dto.image,
});