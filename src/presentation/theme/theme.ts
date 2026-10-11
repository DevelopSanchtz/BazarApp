export const appTheme = {
    colors: {
        background: '#F5F3EF',
        surface: '#FFFFFF',
        border: '#E6E1DA',
        primary: '#D9480F',
        onPrimary: '#FFFFFF',
        textPrimary: '#1F1A17',
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
    }
}

export type AppTheme = typeof appTheme;