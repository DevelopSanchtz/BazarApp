import type { ReactNode } from 'react';
import { HeaderContainer, HeaderTopRow, Logo } from './AppHeader.styles';

const logoSource = require('../../assets/images/logoHeader.png');

interface AppHeaderProps {
    children?: ReactNode;
    rightAction?: ReactNode
}

export function AppHeader({ rightAction, children }: AppHeaderProps) {
  return (
    <HeaderContainer>
      <HeaderTopRow>
          <Logo 
              source={logoSource} 
          />
          {rightAction}
      </HeaderTopRow>
        {children}
    </HeaderContainer>
  );
}