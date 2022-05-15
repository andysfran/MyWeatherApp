import styled from "styled-components";

export default styled.button<{ variation: string }>`
  background-color: ${({ theme, variation }) => theme.colors[variation]};
  padding: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme, variation }) => theme.colors[variation]};
  border-radius: 4px;
  box-shadow: 1px 1px 1px ${({ theme }) => theme.colors.black};
`;
