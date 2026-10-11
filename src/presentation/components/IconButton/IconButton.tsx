import { Icon, type IconName } from '../Icon/Icon';
import { IconButtonContainer } from './IconButton.styles';

interface IconButtonProps {
    icon: IconName;
    accessibilityLabel: string;
    onPress: () => void;
    disabled?: boolean
}

export function IconButton({
    icon,
    accessibilityLabel,
    onPress,
    disabled= false
}: IconButtonProps) 
{
    return (
        <IconButtonContainer
            onPress={onPress}
            disabled={disabled}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
            accessibilityState={{ disabled }}
        >
            <Icon 
                name={icon} 
                size="lg" 
                color="textPrimary" 
            />
        </IconButtonContainer>
    );
}