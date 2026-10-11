import styled from 'styled-components/native';

export const StateContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.md}px;
    padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const StateMessage = 
    styled.Text`
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: ${({ theme }) => theme.fontSize.sm}px;
        text-align: center;
    `;

export const Spinner = styled.ActivityIndicator.attrs(({ theme }) => 
    ({
        size: 'large',
        color: theme.colors.primary,
    }))``;