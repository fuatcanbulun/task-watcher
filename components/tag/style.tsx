import styled from "styled-components";

const TagContainer = styled.div<{ label: string }>`
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
  width: 100px;
  background-color: ${(props) => props.color};
  color: white;
  text-transform: capitalize;
  font-family: RobotoMedium;
`;

export { TagContainer };
