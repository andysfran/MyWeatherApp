import React, {ReactElement} from "react";
import * as S from './Header.styles';

const Header = (): ReactElement => {
  return (
    <S.HeaderContainer>
    <S.MainHeader>
      <S.HeaderTitle>My Weather App</S.HeaderTitle>
    </S.MainHeader>
  </S.HeaderContainer>);
}

export default Header;
