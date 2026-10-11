import styled from 'styled-components/native';

export const RowContainer = styled.View`
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.md}px;
    background-color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};
    border-width: 1px;
    border-radius: ${({ theme }) => theme.radius.md}px;
    padding: ${({ theme }) => theme.spacing.md}px;
`;

export const Thumbnail = styled.Image.attrs({
    resizeMode: 'contain',
})`
    width: 72px;
    height: 72px;
`;

export const Details = styled.View`
    flex: 1;
    gap: ${({ theme }) => theme.spacing.xs}px;
`;

export const TopRow = styled.View`
    flex-direction: row;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const ItemTitle = styled.Text`
    flex: 1;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.sm}px;
    font-weight: 600;
`;

export const UnitPrice = styled.Text`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSize.xs}px;
`;

export const BottomRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${({ theme }) => theme.spacing.xs}px;
`;

export const Stepper = styled.View`
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const Quantity = styled.Text`
    min-width: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.md}px;
    font-weight: 700;
`;

export const Subtotal = styled.Text`
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSize.md}px;
    font-weight: 700;
`;