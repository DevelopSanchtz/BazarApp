import { Spinner, StateContainer, StateMessage } from './ScreenState.styles';

interface LoadingStateProps {
    message: string;
}

export function LoadingState({ message }: LoadingStateProps) {
    return (
        <StateContainer 
            accessibilityRole="progressbar"
        >
            <Spinner />
            
            <StateMessage>
                {message}
            </StateMessage>
        </StateContainer>
  );
}