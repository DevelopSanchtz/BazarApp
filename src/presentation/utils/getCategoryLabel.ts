const CATEGORY_LABELS: Record<string, string> = { 
    "men's clothing": 'Ropa para Caballero',
    "women's clothing": 'Ropa para Dama',
    jewelery: 'Joyería',
    electronics: 'Electrónica',
}

export const getCategoryLabel = (category: string): string => 
    CATEGORY_LABELS[category] ?? category;