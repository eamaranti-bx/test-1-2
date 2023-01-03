import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const ButtonIcon: FC<Props> = ({ children }) => (
  <div className="btn-icon">{children}</div>
);

ButtonIcon.displayName = "ButtonIcon";

export default ButtonIcon;
