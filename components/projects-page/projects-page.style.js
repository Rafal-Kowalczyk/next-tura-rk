import styled from "styled-components";
import theme from "../../styles/theme";

export const ProjectsWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const SlideTitle = styled.h3`
  padding-top: 1rem;
  margin-bottom: 1rem;
`;

export const SlideContent = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

export const SlideImg = styled.img`
  width: 20rem;
  height: 20rem;
  display: block;

  @media ${theme.devices.tabletXS} {
    width: 30rem;
    height: 30rem;
  }
`;
