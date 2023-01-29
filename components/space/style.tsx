import styled from "styled-components";

const SpaceContainer = styled.div<{ size: string }>`
  width: 100%;
  height: ${(props) =>
    props.size == "sm"
      ? "10px"
      : props.size == "md"
      ? "20px"
      : props.size == "lg"
      ? "40px"
      : "0px"};
`;

export { SpaceContainer };
