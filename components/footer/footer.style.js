import styled from "styled-components";

export const FooterWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterUl = styled.ul`
  margin: 0 1rem;
`;
export const FooterLi = styled.li`
  margin-top: 1rem;
  & a {
    color: #fff;
    font-size: 1.5rem;

    &:hover {
      border: none;
    }
  }
`;

export const FooterNext = styled.div`
  transform: rotate(90deg);
  font-size: 1rem;
  cursor: pointer;

  & a:hover {
    border: none;
  }
`;
