import styled from 'styled-components/native';

export const CartButtonContainer = styled.View`
    position: relative;
`;

export const Badge = styled.View`
    position: absolute;
    top: -6px;
    right: -6px;
    min-width: 20px;
    height: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => 
        theme.colors.primary};
    border-color: ${({ theme }) => 
        theme.colors.surface};
    border-width: 2px;
    border-radius: ${({ theme }) => 
        theme.radius.pill}px;
    padding: 0 ${({ theme }) => 
        theme.spacing.xs}px;
`;

export const BadgeLabel = styled.Text`
    color: ${({ theme }) => 
        theme.colors.onPrimary};
    font-size: 11px;
    font-weight: 700;
`;