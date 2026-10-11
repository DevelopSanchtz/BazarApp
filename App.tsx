import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { ProductListScreen } from './src/presentation/screens/ProductListScreen/ProductListScreen';
import { appTheme } from './src/presentation/theme/theme';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={appTheme}>
        <StatusBar barStyle="dark-content" />
        <ProductListScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;