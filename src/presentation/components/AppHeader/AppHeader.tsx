import type { ReactNode } from 'react';
import { HeaderContainer, Logo } from './AppHeader.styles';

const logoSource = require('../../assets/images/logoHeader.png');

interface AppHeaderProps {
    children?: ReactNode;
}

export function AppHeader({ children }: AppHeaderProps) {
  return (
    <HeaderContainer>
        <Logo 
            source={logoSource} 
        />
        {children}
    </HeaderContainer>
  );
}