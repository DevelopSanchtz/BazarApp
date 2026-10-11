import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Screen = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs(({ theme }) => ({
    contentContainerStyle: {
        padding: theme.spacing.lg,
        gap: theme.spacing.md,
    },
}))`
    flex: 1;
`;

export const SectionTitle = styled.Text`
    color: ${({ theme }) => 
        theme.colors.textPrimary};
    font-size: ${({ theme }) => 
        theme.fontSize.md}px;
    font-weight: 600;
`;

export const SummaryCard = styled.View`
    gap: ${({ theme }) => 
        theme.spacing.sm}px;
    background-color: ${({ theme }) => 
        theme.colors.surface};
    border-color: ${({ theme }) => 
        theme.colors.border};
    border-width: 1px;
    border-radius: ${({ theme }) => 
        theme.radius.md}px;
    padding: ${({ theme }) => 
        theme.spacing.lg}px;
`;

export const Notice = styled.Text`
    color: ${({ theme }) => 
        theme.colors.textSecondary};
    font-size: ${({ theme }) => 
        theme.fontSize.xs}px;
    text-align: center;
`;

export const SuccessContent = styled.View`
    flex: 1;
    justify-content: center;
    gap: ${({ theme }) => 
        theme.spacing.md}px;
    padding: ${({ theme }) => 
        theme.spacing.xl}px;
`;

export const SuccessHeading = styled.View`
    align-items: center;
    gap: ${({ theme }) => 
        theme.spacing.sm}px;
`;

export const SuccessTitle = styled.Text`
    color: ${({ theme }) => 
        theme.colors.textPrimary};
    font-size: ${({ theme }) => 
        theme.fontSize.xl}px;
    font-weight: 700;
`;

export const OrderNumber = styled.Text`
    color: ${({ theme }) => 
        theme.colors.textSecondary};
    font-size: ${({ theme }) => 
        theme.fontSize.sm}px;
`;