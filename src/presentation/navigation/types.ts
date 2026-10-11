import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    ProductList: undefined;
    ProductDetail: { productId: number };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;