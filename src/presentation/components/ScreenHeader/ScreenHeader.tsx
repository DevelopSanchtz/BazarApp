import { IconButton } from '../IconButton/IconButton';
import { HeaderContainer, HeaderTitle } from './ScreenHeader.styles';

interface ScreenHeaderProps {
    title: string;
    onBack: () => void;
}

export function ScreenHeader({ title, onBack }: ScreenHeaderProps) {
    return (
        <HeaderContainer>
            <IconButton
                icon="arrow-left"
                accessibilityLabel="Regresar"
                onPress={onBack}
            />
            <HeaderTitle 
                accessibilityRole="header"
            >
                {title}
            </HeaderTitle>
        </HeaderContainer>
    );
}