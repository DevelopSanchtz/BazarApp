import { useCallback } from 'react';
import { Button } from '../../components/Button/Button';
import { IconButton } from '../../components/IconButton/IconButton';
import { ErrorState } from '../../components/ScreenState/ErrorState';
import { LoadingState } from '../../components/ScreenState/LoadingState';
import { useProductDetail } from '../../hooks/useProductDetail';
import type { RootStackScreenProps } from '../../navigation/types';
import { formatPrice } from '../../utils/formatPrice';
import { getCategoryLabel } from '../../utils/getCategoryLabel';
import {
    BackButtonWrapper,
    CartButtonWrapper,
    Category,
    Content,
    Description,
    Divider,
    ImageSection,
    InfoSection,
    Price,
    ProductImage,
    Screen,
    SectionTitle,
    Title,
} from './ProductDetailScreen.style';
import { useCart } from '../../state/cart/cartProvider';
import { CartButton } from '../../components/CartButton/CartButton';
import { BottomBar } from '../../components/BottomBar/BottomBar';

type Props = RootStackScreenProps<'ProductDetail'>;

export function ProductDetailScreen({ route, navigation }: Props) {
    const { productId } = route.params;
    const { product, status, retry } = useProductDetail(productId);
    const { summary, addToCart } = useCart();

    const handleGoBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const handleOpenCart = useCallback(() => {
        navigation.navigate('Cart');
    }, [navigation]);

    const handleAddToCart = useCallback(() => {
        if (product) {
            addToCart(product);
        }
    }, [product, addToCart]);

    if (status === 'loading') {
        return (
            <Screen>
                <LoadingState message="Cargando producto..." />
            </Screen>
        );
    }

    if (status === 'error') {
        return (
            <Screen>
                <ErrorState
                    message="No pudimos cargar el producto. Revisa tu conexión e intenta de nuevo."
                    onAction={retry}
                />
            </Screen>
        );
    }

    if (!product) {
        return (
            <Screen>
                <ErrorState
                    message="Este producto ya no está disponible."
                    actionLabel="Regresar al listado"
                    onAction={handleGoBack}
                />
            </Screen>
        );
    }

    return (
        <Screen>
            <Content>
                <ImageSection>
                    <ProductImage 
                        source={{ uri: product.imageUrl }} 
                    />
                    <BackButtonWrapper>
                        <IconButton
                        icon="arrow-left"
                        accessibilityLabel="Regresar al listado"
                        onPress={handleGoBack}
                    />
                    </BackButtonWrapper>
                    <CartButtonWrapper>
                        <CartButton
                            count={summary.totalQuantity}
                            onPress={handleOpenCart}
                        />
                    </CartButtonWrapper>
                </ImageSection>

                <InfoSection>
                    <Category>
                        {getCategoryLabel(product.category)}
                    </Category>

                    <Title>
                        {product.title}
                    </Title>

                    <Price>
                        {formatPrice(product.price)}
                    </Price>

                    <Divider />

                    <SectionTitle>
                        Descripción
                    </SectionTitle>

                    <Description>
                        {product.description}
                    </Description>
                </InfoSection>
            </Content>

            <BottomBar>
                <Button
                    label='Añadir al carrito'
                    onPress={handleAddToCart}
                />
            </BottomBar>
        </Screen>
    );
}