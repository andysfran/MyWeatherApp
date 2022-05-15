import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.fade};
  position: absolute;
  top: 0;
`;

export const ModalContainer = styled.div<{ pageOffset?: number }>`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: ${({ pageOffset }) => (pageOffset ? `${pageOffset}px` : 0)};

  @media only screen and (min-width: 768px) and (max-width: 1440px) {
    width: 70%;
    height: 500px;
    box-shadow: 1px 0 8px ${({ theme }) => theme.colors.black};
    top: 10%;
    left: 15%;
    right: 15%;
  }

  @media only screen and (min-width: 1440px) {
    width: 50%;
    height: 500px;
    box-shadow: 1px 0 8px ${({ theme }) => theme.colors.black};
    top: 10%;
    left: 25%;
    right: 25%;
  }
}
`;

export const ModalTitleContainer = styled.div`
  width: 100%;
  height: 90px;
  padding: ${({ theme }) => theme.spacing.m};
  display: flex;
  align-items: center;
  box-shadow: 1px 0 8px ${({ theme }) => theme.colors.black};
`;

export const ModalTitle = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ModalContent = styled.section`
  width: 100%;
  height: calc(100% - 90px);
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.m};
`;
