import React from 'react';

import { HeaderContainer, HeaderLogo, HeaderTypography } from '../utils/styles';

import LOGO from '../assets/Probearbeit_Web_Assets/PNGs/Logo_Wolkig.png';

function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo src={LOGO} alt="" />
      <HeaderTypography>Wetter Online</HeaderTypography>
    </HeaderContainer>
  );
}

export default Header;
