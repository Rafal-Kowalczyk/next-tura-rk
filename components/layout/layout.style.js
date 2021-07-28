import styled from "styled-components";
import theme from "../../styles/theme";

export const PageWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("/images/bp.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: contrast(150%);
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

export const Button = styled.button`
  margin-top: 2rem;
  padding: 1rem 4rem;
  color: ${theme.colors.icon};
  background-color: transparent;
  border: 0;
  -webkit-box-shadow: 5px 5px 10px 3px rgba(33, 33, 33, 1);
  box-shadow: 5px 5px 10px 3px rgba(33, 33, 33, 1);
  transition: 0.3s;

  &:hover {
    color: ${theme.colors.text};
    border-bottom: 1px solid ${theme.colors.icon};
    cursor: pointer;
  }
`;
