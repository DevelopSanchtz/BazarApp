import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import { ProductDetailScreen } from '../screens/ProductDetailScreen/ProductDetailScreen';
import { ProductListScreen } from '../screens/ProductListScreen/ProductListScreen';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
    const theme = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="ProductList"
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                    contentStyle: { backgroundColor: theme.colors.background },
                }}
            >
                <Stack.Screen name="ProductList" component={ProductListScreen} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}