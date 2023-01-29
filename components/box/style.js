import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "100%")};
  direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.padding.xs};
  @media only screen and (min-width: 760px) {
    padding: ${(props) => props.padding.sm};
  }
  @media only screen and (min-width: 1200px) {
    padding: ${(props) => props.padding.md};
  }
  @media only screen and (min-width: 1400px) {
    padding: ${(props) => props.padding.lg};
  }
`;

export { BoxContainer };
