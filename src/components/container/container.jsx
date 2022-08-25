import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 50px;
  padding-top: 50px;
`;

export function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
