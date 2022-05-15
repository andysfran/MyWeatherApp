import React from "react";
import ReactDOM from "react-dom";
import { ModalPropsType } from "../../types";
import Button from "../Button/Button";

import * as S from "./Modal.styles";

const Modal = ({ isShowing, hide, children, title }: ModalPropsType) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <S.ModalOverlay pageOffset={window.scrollY}>
            <S.ModalTitleContainer>
              <S.ModalTitle>{title}</S.ModalTitle>
              <Button variation="light" onClick={hide}>
                Close
              </Button>
            </S.ModalTitleContainer>
            <S.ModalContent>{children}</S.ModalContent>
          </S.ModalOverlay>
        </>,
        document.body
      )
    : null;

export default Modal;
