import styled from "styled-components";
import theme from "../../styles/theme";

export const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("/images/bp.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: contrast(160%);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${theme.devices.tabletXS} {
    padding: 4rem;
  }
`;

export const PageContent = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
