import styled from 'styled-components/native';

export const ChipList = styled.ScrollView.attrs(({ theme }) => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: { 
        gap: theme.spacing.sm
    }
}))`
    flex-grow: 0;
`;