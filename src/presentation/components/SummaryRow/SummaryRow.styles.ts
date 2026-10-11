import styled from 'styled-components/native';

interface EmphasisProps {
    $emphasized: boolean;
}

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.md}px;
`;

export const Label = styled.Text<EmphasisProps>`
    flex: 1;
    color: ${({ theme, $emphasized }) =>
        $emphasized ? theme.colors.textPrimary : theme.colors.textSecondary};
    font-size: ${({ theme, $emphasized }) =>
        $emphasized ? theme.fontSize.md : theme.fontSize.sm}px;
    font-weight: ${({ $emphasized }) => ($emphasized ? 700 : 400)};
`;

export const Value = styled.Text<EmphasisProps>`
    color: ${({ theme, $emphasized }) =>
        $emphasized ? theme.colors.primary : theme.colors.textPrimary};
    font-size: ${({ theme, $emphasized }) =>
        $emphasized ? theme.fontSize.lg : theme.fontSize.sm}px;
    font-weight: 700;
`;