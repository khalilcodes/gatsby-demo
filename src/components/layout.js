import React from "react";
import { GlobalStyle } from "../theme/global-style";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" />
      {children}
    </React.Fragment>
  );
}