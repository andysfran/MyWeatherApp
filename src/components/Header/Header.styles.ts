import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.transparent};
  box-shadow: 0px -1px 6px ${({ theme }) => theme.colors.black};
`;

export const MainHeader = styled.header`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.l};
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  margin: auto 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
