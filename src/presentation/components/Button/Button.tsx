import { ButtonContainer, ButtonLabel } from './Button.styles';

interface ButtonProps {
    label: string;
    onPress: () => void;
}

export function Button({ label, onPress }: ButtonProps) { 
    return ( 
        <ButtonContainer 
            onPress={onPress} 
            accessibilityRole="button"
        >
            <ButtonLabel>{label}</ButtonLabel>
        </ButtonContainer>
    );
}