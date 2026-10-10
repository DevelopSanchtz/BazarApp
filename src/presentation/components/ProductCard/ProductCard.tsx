import { memo } from 'react';
import type { Product } from '../../../domain/entities/Product';
import { formatPrice } from '../../utils/formatPrice';
import { getCategoryLabel } from '../../utils/getCategoryLabel';
import { Button } from '../Button/Button';
import {
    CardContainer,
    Category,
    DetailArea,
    Price,
    ProductImage,
    Title
} from './ProductCard.styles';

interface ProductCardProps { 
    product: Product;
    onPress: (productId: number) => void;
    onAddToCart: (product: Product) => void;
}

function ProductCardComponent({ 
    product, onPress, onAddToCart }: ProductCardProps) { 
        return (
            <CardContainer>
                <DetailArea onPress={() => onPress(product.id)}>
                    <ProductImage source={{ uri: product.imageUrl }} />
                    
                    <Category numberOfLines={1}>
                        {getCategoryLabel(product.category)}
                    </Category>

                    <Title numberOfLines={2}>
                        {product.title}
                    </Title>

                    <Price>
                        {formatPrice(product.price)}
                    </Price>

                    <Button 
                        label="Añadir"
                        onPress={() => onAddToCart(product)}
                    />
                </DetailArea>
            </CardContainer>
        )
    }

    export const ProductCard = memo(ProductCardComponent);