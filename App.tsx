import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { appTheme } from './src/presentation/theme/theme';
import { DependenciesProvider } from './src/presentation/providers/DependenciesProvider';
import { container } from './src/di/container';
import { AppNavigator } from './src/presentation/navigation/AppNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <DependenciesProvider dependencies={container}>
      <ThemeProvider theme={appTheme}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </ThemeProvider>
      </DependenciesProvider>
    </SafeAreaProvider>
  );
}

export default App;