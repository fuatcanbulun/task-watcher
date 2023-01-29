import styled from "styled-components";

const ColumnContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  padding: ${(props) => props.padding};
  width: ${(props) => props.xs * 4.16}%;
  @media only screen and (min-width: 760px) {
    width: ${(props) => props.sm * 4.16}%;
  }
  @media only screen and (min-width: 1200px) {
    width: ${(props) => props.md * 4.16}%;
  }
  @media only screen and (min-width: 1400px) {
    width: ${(props) => props.lg * 4.16}%;
  }
`;

export { ColumnContainer };
