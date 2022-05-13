import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colors.transparent};
  box-shadow: 0px -1px 6px #000;
  /*padding: ${({ theme }) => theme.spacing.xl};*/
`;

export const MainHeader = styled.header`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  /*border: 1px solid ${({ theme }) => theme.colors.transparent};
  border-radius: 4px;*/
`;

export const HeaderTitle = styled.span`
  margin: auto 0;
  padding: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

