import React, { FC, ReactElement } from "react";
import cs from "classnames";

import ButtonContainer from "./button-container";
import ButtonIcon from "./button-icon";

export type SizeType = "sm" | "md" | "lg" | "xl";
export type ButtonVariant = "primary";

export type ButtonProps = {
  href: string;
  size?: SizeType;
  disabled?: boolean;
  variant?: ButtonVariant;
  icon?: ReactElement;
  animationHover?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
};

const ButtonExternalLink: FC<ButtonProps> = ({
  href,
  size,
  disabled,
  variant,
  icon,
  children,
  animationHover,
  fullWidth,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={cs("btn", {
        "btn-primary": variant === "primary",
        "btn-sm": size === "sm",
        "btn-md": size === "md",
        "btn-lg": size === "lg",
        "btn-xl": size === "xl",
        "btn-fullwidth": fullWidth,
        "btn-animation": animationHover,
        disabled,
      })}
      rel="noreferrer"
    >
      {!icon && <ButtonContainer>{children}</ButtonContainer>}
      {icon && (
        <ButtonContainer>
          <ButtonIcon>{icon}</ButtonIcon>
          {children}
        </ButtonContainer>
      )}
    </a>
  );
};

ButtonExternalLink.defaultProps = {
  animationHover: true,
  size: "md",
  variant: "primary",
};

ButtonExternalLink.displayName = "ButtonExternalLink";

export default ButtonExternalLink;
