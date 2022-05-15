import React, { KeyboardEvent } from "react";

import { InputPropsType } from "../../types";
import * as S from "./Input.styles";
import debounce from "../../utils/debounce";

const Input = ({ onValue, label, placeholder }: InputPropsType) => {
  const changeValue = debounce((e: KeyboardEvent<HTMLInputElement>) => {
    onValue((e.target as HTMLInputElement).value);
  });

  return (
    <S.InputContainer>
      {label && <S.Label>{label}</S.Label>}
      <S.Input onKeyUp={changeValue} placeholder={placeholder} />
    </S.InputContainer>
  );
};

export default Input;
