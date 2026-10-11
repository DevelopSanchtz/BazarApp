import { Button } from '../Button/Button';
import { Icon, type IconName } from '../Icon/Icon';
import { StateContainer, StateMessage } from './ScreenState.styles';

interface EmptyStateProps {
    icon: IconName;
    message: string;
    actionLabel: string;
    onAction: () => void;
}

export function EmptyState({
    icon,
    message,
    actionLabel,
    onAction,
}: EmptyStateProps) {
    return (
        <StateContainer>
        <Icon 
            name={icon} 
            size="xl" 
        />
        <StateMessage>
            {message}
        </StateMessage>
        <Button 
            label={actionLabel} 
            onPress={onAction} 
        />
        </StateContainer>
    );
}