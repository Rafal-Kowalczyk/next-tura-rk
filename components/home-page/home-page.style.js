import styled from "styled-components";
import theme from "../../styles/theme";

export const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HomeHeroTop = styled.p`
  text-transform: uppercase;
  color: ${theme.colors.icon};
  line-height: 2.2rem;
  margin-left: 2rem;

  @media ${theme.devices.tabletXS} {
    font-size: 3rem;
    line-height: 3.2rem;
    margin-left: 4rem;
  }

  @media ${theme.devices.laptop} {
    font-size: 4rem;
    line-height: 4.2rem;
    margin-left: 5rem;
  }
`;

export const HomeHeroMedium = styled.h1`
  margin: 1rem 0;
  font-size: 7rem;
  line-height: 7rem;
  font-weight: 800;

  @media ${theme.devices.tabletXS} {
    font-size: 11rem;
    line-height: 12rem;
  }

  @media ${theme.devices.laptop} {
    font-size: 18rem;
    line-height: 20rem;
  }
`;
export const HomeHeroBottom = styled(HomeHeroTop)`
  margin-left: 50%;
`;
