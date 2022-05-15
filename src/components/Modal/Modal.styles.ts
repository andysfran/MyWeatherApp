import styled from "styled-components";

export const ModalOverlay = styled.div<{ pageOffset?: number }>`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: ${({ pageOffset }) => (pageOffset ? `${pageOffset}px` : 0)};

  @media only screen and (min-width: 768px) {
    width: 600px;
    height: 500px;
    box-shadow: 1px 0 8px ${({ theme }) => theme.colors.black};
    top: 10%;
    left: 25%;
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

export const TitleButton = styled.button`
  width: 48px;
  height: 44px;
  padding: ${({ theme }) => theme.spacing.s};
`;

export const ModalContent = styled.section`
  width: 100%;
  height: calc(100% - 90px);
  overflow-x: auto;
  padding: ${({ theme }) => theme.spacing.m};
`;
