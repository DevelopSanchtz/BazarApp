export const appTheme = {
    colors: {
        background: '#F5F3EF',
        surface: '#FFFFFF',
        border: '#E6E1DA',
        primary: '#0D8566',
        onPrimary: '#FFFFFF',
        textPrimary: '#504E5B',
        textSecondary: '#6B635C',
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 24,
    },
    radius: {
        sm: 8,
        md: 12,
        pill: 999,
    },
    fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
    },
    iconSize: {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 48
    }
}

export type AppTheme = typeof appTheme;