import { memo } from 'react';
import type { CartItem } from '../../../domain/entities/CartItem';
import { canDecreaseQuantity } from '../../../domain/usecases/cart';
import { calculateItemSubtotal } from '../../../domain/usecases/calculateCartSummary';
import { formatPrice } from '../../utils/formatPrice';
import { IconButton } from '../IconButton/IconButton';
import {
    BottomRow,
    Details,
    ItemTitle,
    Quantity,
    RowContainer,
    Stepper,
    Subtotal,
    Thumbnail,
    TopRow,
    UnitPrice,
} from './CartItemRow.styles';

interface CartItemRowProps {
    item: CartItem;
    onIncrease: (productId: number) => void;
    onDecrease: (productId: number) => void;
    onRemove: (productId: number) => void;
}

function CartItemRowComponent({
    item,
    onIncrease,
    onDecrease,
    onRemove,
}: CartItemRowProps) {
    const { product, quantity } = item;

    return (
        <RowContainer>
            <Thumbnail source={{ uri: product.imageUrl }} />
            <Details>
                <TopRow>
                <ItemTitle 
                    numberOfLines={2}
                >
                    {product.title}
                </ItemTitle>
                <IconButton
                    icon="delete-outline"
                    accessibilityLabel={`Eliminar ${product.title}`}
                    onPress={() => onRemove(product.id)}
                />
                </TopRow>
                <UnitPrice>
                    {formatPrice(product.price)} c/u
                </UnitPrice>
                <BottomRow>
                <Stepper>
                    <IconButton
                    icon="minus"
                    accessibilityLabel="Disminuir cantidad"
                    onPress={() => onDecrease(product.id)}
                    disabled={!canDecreaseQuantity(item)}
                    />

                    <Quantity>
                        {quantity}
                    </Quantity>
                    <IconButton
                        icon="plus"
                        accessibilityLabel="Aumentar cantidad"
                        onPress={() => onIncrease(product.id)}
                    />
                </Stepper>
                <Subtotal>
                    {formatPrice(calculateItemSubtotal(item))}
                </Subtotal>
                </BottomRow>
            </Details>
        </RowContainer>
    );
}

export const CartItemRow = memo(CartItemRowComponent);