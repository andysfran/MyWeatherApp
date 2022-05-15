import styled from "styled-components";

export const Card = styled.div`
  min-width: 100px;
  min-height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.m};
  border-radius: 4px;
  box-shadow: 2px 1px 2px ${({ theme }) => theme.colors.black};

  @media only screen and (min-width: 768px) {
    max-width: 300px;
    min-width: 200px;
    min-height: 120px;
    padding: ${({ theme }) => theme.spacing.m};
  }
`;
