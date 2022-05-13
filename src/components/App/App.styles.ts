import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.l};
`

export const NextForecastText = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const NextForecastContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
