import styled from "styled-components";

const TextContainer = styled.div<{
  size: string;
  weight: string;
  align: string | undefined;
}>`
  text-align: ${(props) => props.align};
  height: auto;
  min-height: ${(props) =>
    props.size == "sm"
      ? "30px"
      : props.size == "md"
      ? "40x"
      : props.size == "lg"
      ? "40px"
      : "0px"};
  line-height: ${(props) =>
    props.size == "sm"
      ? "30px"
      : props.size == "md"
      ? "40px"
      : props.size == "lg"
      ? "40px"
      : "0px"};
  font-size: ${(props) =>
    props.size == "sm"
      ? "14px"
      : props.size == "md"
      ? "18px"
      : props.size == "lg"
      ? "24px"
      : "0px"};
  color: ${(props) => props.color};
  font-family: ${(props) =>
    props.weight == "regular"
      ? "RobotoRegular"
      : props.weight == "medium"
      ? "RobotoMedium"
      : props.weight == "bold"
      ? "RobotoBold"
      : "0px"};
`;

export { TextContainer };
