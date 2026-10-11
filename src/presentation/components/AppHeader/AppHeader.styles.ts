import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
gap: ${({ theme }) => 
    theme.spacing.md}px;
background-color: ${({ theme }) => 
    theme.colors.background};
border-bottom-color: ${({ theme }) => 
    theme.colors.border};
border-bottom-width: 1px;
padding-top: ${({ theme }) => 
    theme.spacing.sm}px;
padding-bottom: ${({ theme }) => 
    theme.spacing.md}px;
padding-horizontal: ${({ theme }) => 
    theme.spacing.lg}px;
`;

export const HeaderTopRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain', 
  accessibilityRole: 'image',
  accessibilityLabel: 'Bazar',
})`
  width: 94px;
  height: 32px;
`;