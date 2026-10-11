import styled from 'styled-components/native';

export const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm}px;
    background-color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};
    border-width: 1px;
    border-radius: ${({ theme }) => theme.radius.pill}px;
    padding: 0 ${({ theme }) => theme.spacing.md}px;
`;

export const SearchInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.textSecondary,
    returnKeyType: 'search',
    autoCorrect: false,
    autoCapitalize: 'none',
}))`
    flex: 1;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
    padding: ${({ theme }) => theme.spacing.sm}px 0;
`

export const ClearButton = styled.TouchableOpacity.attrs({
    hitSlop: 8,
})``;