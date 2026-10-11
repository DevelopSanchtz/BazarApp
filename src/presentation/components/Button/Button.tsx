import { ButtonContainer, ButtonLabel } from './Button.styles';

interface ButtonProps {
    label: string;
    onPress: () => void;
    disabled?: boolean
}

export function Button({ label, onPress, disabled = false }: ButtonProps) { 
    return ( 
        <ButtonContainer 
            onPress={onPress} 
            disabled={disabled}
            accessibilityRole="button"
            accessibilityState={{ disabled }}
        >
            <ButtonLabel>
                {label}
            </ButtonLabel>
        </ButtonContainer>
    );
}