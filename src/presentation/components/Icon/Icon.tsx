import {
    MaterialDesignIcons,
    type MaterialDesignIconsIconName,
} from '@react-native-vector-icons/material-design-icons/static';
import { useTheme } from 'styled-components/native';
import type { AppTheme } from '../../theme/theme';

export type IconName = MaterialDesignIconsIconName;

interface IconProps { 
    name: IconName;
    size?: keyof AppTheme['iconSize'];
    color?: keyof AppTheme['colors'];
}

export function Icon({
    name,
    size = 'md',
    color = 'textSecondary',
}: IconProps) { 
    const theme = useTheme();

    return (
        <MaterialDesignIcons 
            name={name}
            size={theme.iconSize[size]}
            color={theme.colors[color]}
        />
    )
}