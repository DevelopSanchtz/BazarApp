import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import styled, {ThemeProvider} from 'styled-components/native';
import type { Product } from './src/domain/entities/Product';
import {ProductCard} from './src/presentation/components/ProductCard/ProductCard';
import {appTheme} from './src/presentation/theme/theme';

const SAMPLE_PRODUCT: Product[] = [
  {
    "id": 1,
    "title": "Camisa de algodón manga larga",
    "price": 29.99,
    "description": "Camisa casual de algodón 100%, ideal para uso diario, disponible en varias tallas.",
    "category": "men's clothing",
    "imageUrl": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    "id": 2,
    "title": "Chaqueta de mezclilla clásica",
    "price": 54.99,
    "description": "Chaqueta de mezclilla resistente con corte clásico, perfecta para looks casuales.",
    "category": "men's clothing",
    "imageUrl": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
  },

]

const Screen = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

const Row = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

function App() {

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={appTheme}>
        <Screen>
          <Row>
            {SAMPLE_PRODUCT.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}
                onPress={id => console.log('Ver detalle:', id)}
                onAddToCart={item => console.log('Agregar:', item.title)}
              />
            ))}
          </Row>
        </Screen>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;