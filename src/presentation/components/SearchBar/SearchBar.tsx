import { Icon } from '../Icon/Icon'
import { ClearButton, SearchContainer, SearchInput } from './SearchBar.styles'

interface SearchBarProps { 
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

export function SearchBar({ 
    value,
    onChangeText,
    placeholder = 'Buscar productos...'
}: SearchBarProps) { 
    return (
        <SearchContainer>
            <Icon
                name="magnify"
            />
            
            <SearchInput 
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                accessibilityLabel="Buscar productos por nombre"
            />

            {value.length > 0 && (
                <ClearButton
                    onPress={() => onChangeText('')}
                    accessibilityRole="button"
                    accessibilityLabel="Limpiar búsqueda"
                >
                    <Icon name="close" size="sm" />
                </ClearButton>
            )}
        </SearchContainer>
    )
}