import styled from "styled-components";

export const LocationText = styled.h3`
  margin-top: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const LocationIcon = styled.img`
  margin-left: ${({ theme }) => theme.spacing.s};
`;

export const DateText = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const TemperatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TemperatureText = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.l};
  display: flex;
  align-items: center;
`;

export const AltTemperatureText = styled(TemperatureText)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
