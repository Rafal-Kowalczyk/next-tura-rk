import styled from "styled-components";
import theme from "../../styles/theme";

export const ProjectsWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const SlideTitle = styled.h3``;
export const SlideContent = styled.p``;

export const SlideImg = styled.img`
  width: 20rem;
  height: 20rem;
  display: block;

  @media ${theme.devices.tabletXS} {
    width: 40rem;
    height: 40rem;
  }
`;
