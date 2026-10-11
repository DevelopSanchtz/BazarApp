import styled from 'styled-components/native';

export const IconButtonContainer = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
    hitSlop: 8,
})
`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.border};
    border-width: 1px;
    border-radius: ${({ theme }) => theme.radius.pill}px;
`;