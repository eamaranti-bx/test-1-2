import { FC } from "react";
import cs from "classnames";

import SpinnerIcon from "./spinner-icon";
import SpinnerBg from "./spinner-bg";

type SpinnerProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
};

const Spinner: FC<SpinnerProps> = ({ variant, size }) => {
  return (
    <div
      className={cs("spinner", {
        "spinner-sm": size === "sm",
        "spinner-md": size === "md",
        "spinner-lg": size === "lg",
        "spinner-xl": size === "xl",
        "spinner-primary": variant === "primary",
        "spinner-secondary": variant === "secondary",
      })}
      role="status"
    >
      <span className="spinner-icon">
        <SpinnerIcon size={size} />
      </span>
      <span className="spinner-bg">
        <SpinnerBg size={size} />
      </span>
    </div>
  );
};

Spinner.defaultProps = {
  variant: "primary",
};

Spinner.displayName = "Spinner";

export default Spinner;
