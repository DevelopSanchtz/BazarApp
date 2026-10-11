import { useCallback } from 'react';
import { FlatList, type ListRenderItem } from 'react-native';
import { useTheme } from 'styled-components/native';
import type { Product } from '../../../domain/entities/Product';
import { ProductCard } from '../ProductCard/ProductCard';
import { EmptyMessage, GridItem } from './ProductGrid.styles';

interface ProductGridProps {
    products: readonly Product[];
    onPressProduct: (productId: number) => void;
    onAddToCart: (product: Product) => void;
}

export function ProductGrid({
    products,
    onPressProduct,
    onAddToCart,
}: ProductGridProps) 
{
    const theme = useTheme();

    const renderItem: ListRenderItem<Product> = useCallback(
        ({ item }) => (
        <GridItem>
            <ProductCard
                product={item}
                onPress={onPressProduct}
                onAddToCart={onAddToCart}
            />
        </GridItem>
        ),
        [onPressProduct, onAddToCart]
    );

  return (
    <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ padding: theme.spacing.md }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        ListEmptyComponent={
            <EmptyMessage>No encontramos productos con esa búsqueda.</EmptyMessage>
        }
    />
  );
}