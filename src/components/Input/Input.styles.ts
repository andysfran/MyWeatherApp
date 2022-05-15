import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  font-size: 16px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.input};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
