import { FC } from "react";

import { sizes } from "./types";

type SpinnerIconProps = {
  color?: string;
  size?: string;
};

const SpinnerIcon: FC<SpinnerIconProps> = ({ color, size }) => {
  return (
    <svg
      width={(size && sizes[size]) || 36}
      height={(size && sizes[size]) || 36}
      fill="none"
      viewBox="0 0 36 36"
      stroke="currentColor"
      style={{ color }}
    >
      <path
        d="M3 18c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

SpinnerIcon.displayName = "SpinnerIcon";

export default SpinnerIcon;
