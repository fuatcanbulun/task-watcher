import React from "react";
import { BoxContainer } from "./style";

const Box = ({ children, ...props }) => {
  return <BoxContainer {...props}>{children}</BoxContainer>;
};

export default Box;
