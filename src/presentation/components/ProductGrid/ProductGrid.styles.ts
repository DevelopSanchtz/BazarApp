import styled from 'styled-components/native';

export const GridItem = styled.View`
    width: 50%;
    padding: ${({ theme }) => 
        theme.spacing.xs}px;
`;

export const EmptyMessage = styled.Text`
    color: ${({ theme }) => 
        theme.colors.textSecondary};
    font-size: ${({ theme }) => 
        theme.fontSize.sm}px;
    text-align: center;
    margin-top: ${({ theme }) => 
        theme.spacing.xl}px;
`;