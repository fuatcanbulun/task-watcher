import styled from "styled-components";

const sizes = {
  xs: "20px",
  sm: "30px",
  md: "40px",
  lg: "50px",
};

const IconContainer = styled.div`
  width: ${(props) => sizes[props.size]};
  height: ${(props) => sizes[props.size]};
  color: var(--${(props) => props.color});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { IconContainer };
