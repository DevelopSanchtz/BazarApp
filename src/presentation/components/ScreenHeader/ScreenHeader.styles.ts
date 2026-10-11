import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => 
        theme.spacing.md}px;
    background-color: ${({ theme }) => 
        theme.colors.background};
    border-bottom-color: ${({ theme }) => 
        theme.colors.border};
    border-bottom-width: 1px;
    padding: ${({ theme }) => 
        theme.spacing.sm}px
    ${({ theme }) => 
        theme.spacing.lg}px;
`;

export const HeaderTitle = styled.Text`
    flex: 1;
    color: ${({ theme }) => 
        theme.colors.textPrimary};
    font-size: ${({ theme }) => 
        theme.fontSize.lg}px;
    font-weight: 700;
`;