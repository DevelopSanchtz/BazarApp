import type { ReactNode } from 'react';
import { HeaderContainer, HeaderTopRow, Logo } from './AppHeader.styles';

const logoSource = require('../../assets/images/logoHeader.png');

interface AppHeaderProps {
    children?: ReactNode;
    rightAction?: ReactNode
}

export function AppHeader({ children }: AppHeaderProps) {
  return (
    <HeaderContainer>
      <HeaderTopRow>
          <Logo 
              source={logoSource} 
          />
      </HeaderTopRow>
        {children}
    </HeaderContainer>
  );
}