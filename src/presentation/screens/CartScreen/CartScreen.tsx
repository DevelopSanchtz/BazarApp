import { useCallback } from 'react';
import { FlatList, type ListRenderItem } from 'react-native';
import { useTheme } from 'styled-components/native';
import type { CartItem } from '../../../domain/entities/CartItem';
import { BottomBar } from '../../components/BottomBar/BottomBar';
import { Button } from '../../components/Button/Button';
import { CartItemRow } from '../../components/CartItemRow/CartItemRow';
import { ScreenHeader } from '../../components/ScreenHeader/ScreenHeader';
import { EmptyState } from '../../components/ScreenState/EmptyState';
import { SummaryRow } from '../../components/SummaryRow/SummaryRow';
import type { RootStackScreenProps } from '../../navigation/types';
import { useCart } from '../../state/cart/cartProvider';
import { formatPrice } from '../../utils/formatPrice';
import { Screen } from './CartScreen.styles';

type Props = RootStackScreenProps<'Cart'>;

export function CartScreen({ navigation }: Props) {
    const theme = useTheme();
    const { items, summary, increaseQuantity, decreaseQuantity, removeFromCart } =
        useCart();

    const handleGoBack = useCallback(() => {
        navigation.goBack();
  }, [navigation]);

    const handleCheckout = useCallback(() => {
        navigation.navigate('Checkout');
    }, [navigation]);

    const renderItem: ListRenderItem<CartItem> = useCallback(
        ({ item }) => (
            <CartItemRow
                item={item}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeFromCart}
            />
        ),
        [increaseQuantity, decreaseQuantity, removeFromCart],
    );

  return (
    <Screen>
        <ScreenHeader title="Mi carrito" onBack={handleGoBack} />

        {items.length === 0 ? (
            <EmptyState
                icon="cart-off"
                message="Tu carrito está vacío."
                actionLabel="Ver productos"
                onAction={handleGoBack}
            />
        ) 
        : 
        (
        <>
            <FlatList
                data={items}
                keyExtractor={item => String(item.product.id)}
                renderItem={renderItem}
                contentContainerStyle={{
                    padding: theme.spacing.lg,
                    gap: theme.spacing.md,
                }}
            />
            <BottomBar>
                <SummaryRow
                    label="Cantidad de productos"
                    value={String(summary.totalQuantity)}
                />
                <SummaryRow
                    label="Total"
                    value={formatPrice(summary.totalPrice)}
                    emphasized
                />
                <Button 
                    label="Checkout" 
                    onPress={handleCheckout} 
                />
            </BottomBar>
        </>
      )}
    </Screen>
  );
}