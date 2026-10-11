import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { StateContainer, StateMessage } from './ScreenState.styles';

interface ErrorStateProps {
    message: string;
    onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
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
                label="Reintentar" 
                onPress={onRetry} 
            />
        </StateContainer>
  );
}