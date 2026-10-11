import { formatBadgeCount } from '../../utils/formatBadgeCount';
import { IconButton } from '../IconButton/IconButton';
import { Badge, BadgeLabel, CartButtonContainer } from './CartButton.styles';

interface CartButtonProps {
    count: number;
    onPress: () => void;
}

export function CartButton({ count, onPress }: CartButtonProps) {
    return (
        <CartButtonContainer>
            <IconButton
                icon="cart-outline"
                accessibilityLabel={`Ver carrito, ${count} productos`}
                onPress={onPress}
            />
            {count > 0 && (
                <Badge pointerEvents="none">
                <BadgeLabel>{formatBadgeCount(count)}</BadgeLabel>
                </Badge>
            )}
        </CartButtonContainer>
    );
}