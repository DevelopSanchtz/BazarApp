import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import type { Product } from '../../../domain/entities/Product';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { CategoryFilter } from '../../components/CategoryFilter/CategoryFilter';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useProductFilters } from '../../hooks/useProductFilters';
import { EmptyMessage, GridItem, Screen } from './ProductListScreen.styles';
import { SAMPLE_PRODUCTS } from './sampleProducts';

export function ProductListScreen() {
    const theme = useTheme();
    const {
        query,
        setQuery,
        selectedCategory,
        setSelectedCategory,
        categories,
        filteredProducts,
  } = useProductFilters(SAMPLE_PRODUCTS);

    const handleOpenDetail = useCallback((
        productId: number
    ) => {
        console.log('Ver detalle:', productId);
    }, []);

    const handleAddToCart = useCallback((product: Product) => {
        console.log('Agregar:', product.title);
    }, []);

    return (
    <Screen>
        <AppHeader>
        <SearchBar 
            value={query} 
            onChangeText={setQuery} 
        />
        <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
        />
      </AppHeader>

      <FlatList
        data={filteredProducts}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        contentContainerStyle={{ padding: theme.spacing.md }}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        renderItem={({ item }) => (
        <GridItem>
            <ProductCard
                product={item}
                onPress={handleOpenDetail}
                onAddToCart={handleAddToCart}
            />
        </GridItem>
        )}
        ListEmptyComponent={
            <EmptyMessage>
                No encontramos productos con esa búsqueda.
            </EmptyMessage>
        }
      />
    </Screen>
  );
}