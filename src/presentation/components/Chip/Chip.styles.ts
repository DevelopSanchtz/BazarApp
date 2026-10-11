import styled from 'styled-components/native';

interface SelectableProps {
    $selected: boolean;
}

export const ChipContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.8,
})<SelectableProps>`
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs}px;
    background-color: ${({ theme, $selected }) => 
        $selected ? theme.colors.primary : theme.colors.surface};
    border-color: ${({ theme, $selected }) => 
        $selected ? theme.colors.primary : theme.colors.border};
    border-width: 1px;
    border-radius: ${({ theme }) => theme.radius.pill}px;
    padding: ${({ theme }) => 
        theme.spacing.xs}px
            ${({ theme }) => theme.spacing.md}px;
`
export const ChipLabel = styled.Text<SelectableProps>`
    color: ${({ theme, $selected }) =>
        $selected ? theme.colors.onPrimary : theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
`