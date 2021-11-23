import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Layout = ({
  children,
  withoutMargin,
  startTransparent = false,
}) => {
  return (
    <React.Fragment>
      <Header startTransparent={startTransparent} />
      <WrapStyled $startTransparent={startTransparent}>
        {children}
      </WrapStyled>
    </React.Fragment>
  );
};

const WrapStyled = styled.div`
  ${(props) =>
    !props.$startTransparent &&
    `
    background-color: rgb(234,237,237);
  `}
`;

export default Layout