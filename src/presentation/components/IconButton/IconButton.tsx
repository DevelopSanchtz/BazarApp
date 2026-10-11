import { Icon, type IconName } from '../Icon/Icon';
import { IconButtonContainer } from './IconButton.styles';

interface IconButtonProps {
    icon: IconName;
    accessibilityLabel: string;
    onPress: () => void;
}

export function IconButton({
    icon,
    accessibilityLabel,
    onPress,
}: IconButtonProps) 
{
    return (
        <IconButtonContainer
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
        >
            <Icon 
                name={icon} 
                size="lg" 
                color="textPrimary" 
            />
        </IconButtonContainer>
    );
}