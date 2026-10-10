import styled from 'styled-components/native';

export const CardContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};
    border-width: 1px;
    border-radius: ${({ theme }) => theme.radius.md}px;
    padding: ${({ theme }) => theme.spacing.md}px;
`;

export const DetailArea = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const ProductImage = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 100%;
    height: 120px;
    margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const Category = styled.Text`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSize.xs}px;
    text-transform: uppercase;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
    font-weight: 600;
    line-height: 18px;
    min-height: 36px;
    margin-vertical: ${({ theme }) => theme.spacing.xs}px;
`;

export const Price = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.md}px;
    font-weight: 700;
`;