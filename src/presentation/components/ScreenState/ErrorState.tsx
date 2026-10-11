import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { StateContainer, StateMessage } from './ScreenState.styles';

interface ErrorStateProps {
    message: string;
    onAction: () => void;
    actionLabel?: string;
}

export function ErrorState(
    { 
        message, 
        onAction,
        actionLabel = 'Reintentar'
    }: ErrorStateProps) 
    {
        return (
        <StateContainer>
            <Icon 
                name="cloud-off-outline" 
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