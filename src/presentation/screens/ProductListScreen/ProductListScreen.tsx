import { useCallback } from 'react';
import type { Product } from '../../../domain/entities/Product';
import { AppHeader } from '../../components/AppHeader/AppHeader';
import { CategoryFilter } from '../../components/CategoryFilter/CategoryFilter';
import { ProductGrid } from '../../components/ProductGrid/ProductGrid';
import { ErrorState } from '../../components/ScreenState/ErrorState';
import { LoadingState } from '../../components/ScreenState/LoadingState';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useProductFilters } from '../../hooks/useProductFilters';
import { useProducts } from '../../hooks/useProducts';
import { Screen } from './ProductListScreen.styles';
import type { RootStackScreenProps } from '../../navigation/types';

type Props = RootStackScreenProps<'ProductList'>;

export function ProductListScreen({ navigation }: Props) {

    const { products, status, retry} = useProducts()
    const {
        query,
        setQuery,
        selectedCategory,
        setSelectedCategory,
        categories,
        filteredProducts,
  } = useProductFilters(products);

    const handleOpenDetail = useCallback(
        (productId: number) => {
            navigation.navigate('ProductDetail', { productId });
        },
        [navigation],
    );

    const handleAddToCart = useCallback((product: Product) => {
        console.log('Agregar:', product.title);
    }, []);

    const isCatalogReady = status === 'success'

    return (
        <Screen>
            <AppHeader>
                {isCatalogReady && (
                    <>
                        <SearchBar 
                            value={query} 
                            onChangeText={setQuery} 
                        />
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                    </>
                )}
            </AppHeader>

            {status === 'loading' && 
                <LoadingState
                    message='Cargando los productos...'
                />
            }

            {status === 'error' && (
                <ErrorState
                    message='No pudimos cargar los productos. Por favor, intente nuevamente'
                    onAction={retry}
                />
            )}

            {isCatalogReady && (
                <ProductGrid
                    products={filteredProducts}
                    onPressProduct={handleOpenDetail}
                    onAddToCart={handleAddToCart}
                />
            )}
        </Screen>
  );
}