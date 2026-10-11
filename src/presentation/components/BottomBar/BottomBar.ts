import styled from 'styled-components/native';

export const BottomBar = styled.View`
    gap: ${({ theme }) => 
        theme.spacing.sm}px;
    background-color: ${({ theme }) => 
        theme.colors.surface};
    border-top-color: ${({ theme }) => 
        theme.colors.border};
    border-top-width: 1px;
    padding: ${({ theme }) => 
        theme.spacing.md}px
    ${({ theme }) => 
        theme.spacing.lg}px;
`;