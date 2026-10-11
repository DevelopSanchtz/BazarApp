import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Screen = styled(SafeAreaView)
`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.surface};
`;

export const Content = styled.ScrollView
`
    flex: 1;
`;

export const ImageSection = styled.View
`
    padding: ${({ theme }) => theme.spacing.xl}px;
`;

export const ProductImage = styled.Image.attrs({
    resizeMode: 'contain',
})
`
    width: 100%;
    height: 300px;
`;

export const BackButtonWrapper = styled.View
`
    position: absolute;
    top: ${({ theme }) => 
        theme.spacing.md}px;
    left: ${({ theme }) => 
        theme.spacing.md}px;
`;

export const CartButtonWrapper = styled.View`
    position: absolute;
    top: ${({ theme }) => 
        theme.spacing.md}px;
    right: ${({ theme }) => 
        theme.spacing.md}px;
`;

export const InfoSection = styled.View
`
    gap: ${({ theme }) => 
        theme.spacing.sm}px;
    background-color: ${({ theme }) => 
        theme.colors.background};
    border-top-left-radius: ${({ theme }) => 
        theme.radius.md * 2}px;
    border-top-right-radius: ${({ theme }) => 
        theme.radius.md * 2}px;
    padding: ${({ theme }) => 
        theme.spacing.xl}px
        ${({ theme }) => 
            theme.spacing.lg}px;
`;

export const Category = styled.Text
`
    color: ${({ theme }) => 
        theme.colors.textSecondary};
    font-size: ${({ theme }) => 
        theme.fontSize.xs}px;
    text-transform: uppercase;
`;

export const Title = styled.Text
`
    color: ${({ theme }) => 
        theme.colors.textPrimary};
    font-size: ${({ theme }) => 
        theme.fontSize.lg}px;
    font-weight: 700;
`;

export const Price = styled.Text
`
    color: ${({ theme }) => 
        theme.colors.primary};
    font-size: ${({ theme }) => 
        theme.fontSize.xl}px;
    font-weight: 700;
`;

export const Divider = styled.View
`
    height: 1px;
    background-color: ${({ theme }) => 
        theme.colors.border};
    margin: ${({ theme }) => 
        theme.spacing.sm}px 0;
`;

export const SectionTitle = styled.Text
`
    color: ${({ theme }) => 
        theme.colors.textPrimary};
    font-size: ${({ theme }) => 
        theme.fontSize.md}px;
    font-weight: 600;
    `;

export const Description = styled.Text
`
    color: ${({ theme }) => 
        theme.colors.textSecondary};
    font-size: ${({ theme }) => 
        theme.fontSize.sm}px;
    line-height: 22px;
`;