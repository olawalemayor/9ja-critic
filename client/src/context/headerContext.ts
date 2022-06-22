import React from "react";

const defaultState = {
  isToggled: false,
  setIsToggled: () => {},
  onLogin: false,
  setOnLogin: () => {},
  onSignUp: false,
  setOnSignUp: () => {},
};

const HeaderContext = React.createContext({ ...defaultState });

HeaderContext.displayName = "Header Context";

export default HeaderContext;
