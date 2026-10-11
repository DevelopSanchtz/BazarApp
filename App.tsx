import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { ProductListScreen } from './src/presentation/screens/ProductListScreen/ProductListScreen';
import { appTheme } from './src/presentation/theme/theme';
import { DependenciesProvider } from './src/presentation/providers/DependenciesProvider';
import { container } from './src/di/container';

function App() {
  return (
    <SafeAreaProvider>
      <DependenciesProvider dependencies={container}>
      <ThemeProvider theme={appTheme}>
        <StatusBar barStyle="dark-content" />
        <ProductListScreen />
      </ThemeProvider>
      </DependenciesProvider>
    </SafeAreaProvider>
  );
}

export default App;