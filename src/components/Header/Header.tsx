import React, { ReactElement } from "react";
import Button from "../Button/Button";
import * as S from "./Header.styles";

const Header = ({
  onOpenBookmarks,
}: {
  onOpenBookmarks: () => void;
}): ReactElement => {
  return (
    <S.HeaderContainer>
      <S.MainHeader>
        <S.HeaderTitle>My Weather App</S.HeaderTitle>
        <Button variation="dark" onClick={onOpenBookmarks}>
          Bookmarks
        </Button>
      </S.MainHeader>
    </S.HeaderContainer>
  );
};

export default Header;
