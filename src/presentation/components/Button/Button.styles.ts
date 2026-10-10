import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})

` 
align-items: center;
background-color: ${({ theme }) => theme.colors.primary};
border-radius: ${({ theme }) => theme.radius.sm}px;
padding: ${({ theme }) => theme.spacing.sm}px 
    ${({ theme }) => theme.spacing.lg}px;
`;

export const ButtonLabel = styled.Text`
color: ${({ theme }) => theme.colors.onPrimary};
font-size: ${({ theme }) => theme.fontSize.md}px;
font-weight: 600;
`;