import { Icon } from '../Icon/Icon'
import { ChipContainer, ChipLabel } from './Chip.styles'

interface ChipProps { 
    label: string;
    selected: boolean;
    onPress: () => void;
}

export function Chip({ label, selected, onPress }: ChipProps) { 
    return (
        <ChipContainer
            $selected={selected}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={{ selected }}
        >
            {selected &&
                <Icon
                    name="check"
                    size="sm"
                    color="onPrimary"
                />
            }
            <ChipLabel
                $selected={selected}
            >
                {label}
            </ChipLabel>

        </ChipContainer>
    )
}