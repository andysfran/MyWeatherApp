import React, { KeyboardEvent } from "react";

import * as S from "./Input.styles";
import debounce from "../../utils/debounce";

const Input = ({
  onValue,
  label,
  placeholder,
}: {
  onValue: (value: string) => void;
  label: string;
  placeholder?: string;
}) => {
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
