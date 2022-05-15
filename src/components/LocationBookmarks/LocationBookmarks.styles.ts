import styled from "styled-components";

export const ContainerBookmarks = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerBookmarksHeading = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LocationList = styled.ul`
  width: 100%;
  height: 100%;
  border: 1px solid;
  padding-left: 0;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const LocationLi = styled.li`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.m};
  border: 1px solid ${({ theme }) => theme.colors.border};
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CityName = styled.span`
  width: 100%;
  height: 100%;
`;
