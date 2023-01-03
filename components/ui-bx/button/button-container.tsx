import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonContainer: FC<Props> = ({ children }) => (
  <span className="btn-container">{children}</span>
);

ButtonContainer.displayName = "ButtonContainer";

export default ButtonContainer;
