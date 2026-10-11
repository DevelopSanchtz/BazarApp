import { useCallback } from 'react';
import { calculateItemSubtotal } from '../../../domain/usecases/calculateCartSummary';
import { BottomBar } from '../../components/BottomBar/BottomBar';
import { Button } from '../../components/Button/Button';
import { Icon } from '../../components/Icon/Icon';
import { ScreenHeader } from '../../components/ScreenHeader/ScreenHeader';
import { ErrorState } from '../../components/ScreenState/ErrorState';
import { LoadingState } from '../../components/ScreenState/LoadingState';
import { SummaryRow } from '../../components/SummaryRow/SummaryRow';
import { useCheckout } from '../../hooks/useCheckout';
import type { RootStackScreenProps } from '../../navigation/types';
import { formatPrice } from '../../utils/formatPrice';
import {
  Content,
  Notice,
  OrderNumber,
  Screen,
  SectionTitle,
  SuccessContent,
  SuccessHeading,
  SuccessTitle,
  SummaryCard,
} from './CheckoutScreen.styles';

type Props = RootStackScreenProps<'Checkout'>;

export function CheckoutScreen({ navigation }: Props) {
    const { status, items, summary, order, confirmPurchase } = useCheckout();

    const handleGoBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const handleContinueShopping = useCallback(() => {
        navigation.popToTop();
    }, [navigation]);

    if (status === 'processing') {
        return (
            <Screen>
                <LoadingState message="Confirmando tu compra..." />
            </Screen>
        );
    }

  if (status === 'success' && order) {
    return (
        <Screen>
            <SuccessContent>
                <SuccessHeading>
                    <Icon 
                        name="check-circle-outline" 
                        size="xl" 
                        color="primary" 
                    />
                    <SuccessTitle>
                        ¡Compra confirmada!
                    </SuccessTitle>
                    <OrderNumber>
                        Pedido {order.id}
                    </OrderNumber>
                </SuccessHeading>
                <SummaryCard>
                    <SummaryRow
                        label="Cantidad de productos"
                        value={String(order.totalQuantity)}
                    />
                    <SummaryRow
                        label="Total"
                        value={formatPrice(order.totalPrice)}
                        emphasized
                    />
                </SummaryCard>
                <Button 
                    label="Seguir comprando" 
                    onPress={handleContinueShopping} 
                />
            </SuccessContent>
        </Screen>
    );
  }

    return (
        <Screen>
        <ScreenHeader 
            title="Resumen de compra" 
            onBack={handleGoBack} 
        />

        {status === 'error' ? (
            <ErrorState
                message="No pudimos confirmar tu compra. Intenta de nuevo."
                onAction={confirmPurchase}
            />
        ) 
        : 
        (
            <>
                <Content>
                    <SectionTitle>
                        Productos
                    </SectionTitle>
                    <SummaryCard>
                    {items.map(item => (
                        <SummaryRow
                            key={item.product.id}
                            label={`${item.quantity} × ${item.product.title}`}
                            value={formatPrice(calculateItemSubtotal(item))}
                        />
                    ))}
                    </SummaryCard>
                    <SummaryCard>
                    <SummaryRow
                        label="Cantidad de productos"
                        value={String(summary.totalQuantity)}
                    />
                    <SummaryRow
                        label="Total"
                        value={formatPrice(summary.totalPrice)}
                        emphasized
                    />
                    </SummaryCard>
                    <Notice>
                        Compra simulada: no se realizará ningún cargo.
                    </Notice>
                </Content>
                <BottomBar>
                    <Button
                        label="Confirmar compra"
                        onPress={confirmPurchase}
                        disabled={items.length === 0}
                    />
                </BottomBar>
            </>
        )}
        </Screen>
  );
}