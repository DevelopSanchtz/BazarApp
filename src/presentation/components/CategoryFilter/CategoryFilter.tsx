import { getCategoryLabel } from "../../utils/getCategoryLabel"; 
import { Chip } from "../Chip/Chip";
import { ChipList } from "./CategoryFilter.styles";

interface CategoryFilterProps { 
    categories: readonly string[];
    selectedCategory: string | null;
    onSelectCategory: (category: string | null) => void;
}

export function CategoryFilter({ 
    categories,
    selectedCategory,
    onSelectCategory
}: CategoryFilterProps) { 
    return (
        <ChipList>
            <Chip 
                label="Todas"
                selected={selectedCategory === null}
                onPress={() => onSelectCategory(null)}
            />
            {categories.map(category => (
                <Chip 
                    key={category}
                    label={getCategoryLabel(category)}
                    selected={ category === selectedCategory }
                    onPress={() => onSelectCategory(category)}
                />
            ))}
        </ChipList>
    )
}