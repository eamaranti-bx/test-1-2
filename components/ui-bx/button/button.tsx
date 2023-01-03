import React, { FC, MouseEvent, ReactElement } from "react";
import cs from "classnames";

import { Spinner } from "../spinner/index";
import ButtonContainer from "./button-container";
import ButtonIcon from "./button-icon";

export type ButtonType = "button" | "reset" | "submit";
export type SizeType = "sm" | "md" | "lg" | "xl";
export type ButtonVariant = "primary" | "outline";

export type ButtonProps = {
  size?: SizeType;
  type?: ButtonType;
  disabled?: boolean;
  isActive?: boolean;
  variant?: ButtonVariant;
  isLoading?: boolean;
  icon?: ReactElement;
  animationHover?: boolean;
  fullWidth?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({
  size,
  type,
  disabled,
  isActive,
  variant,
  isLoading,
  icon,
  children,
  animationHover,
  fullWidth,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cs("btn", {
        "btn-primary": variant === "primary",
        "btn-outline": variant === "outline",
        "btn-sm": size === "sm",
        "btn-md": size === "md",
        "btn-lg": size === "lg",
        "btn-xl": size === "xl",
        "btn-is-loading": isLoading,
        "btn-fullwidth": fullWidth,
        "btn-animation": animationHover,
        "btn-is-active": isActive,
      })}
    >
      {!icon && !isLoading && <ButtonContainer>{children}</ButtonContainer>}
      {icon && !isLoading && (
        <ButtonContainer>
          <ButtonIcon>{icon}</ButtonIcon>
          {children}
        </ButtonContainer>
      )}
      {isLoading && (
        <ButtonContainer>
          <Spinner size={size} />
        </ButtonContainer>
      )}
    </button>
  );
};

Button.defaultProps = {
  animationHover: true,
  size: "md",
  variant: "primary",
  isLoading: false,
};

Button.displayName = "Button";

export default Button;
