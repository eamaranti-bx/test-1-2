import { FC } from "react";

import { sizes } from "./types";

type SpinnerBgProps = {
  color?: string;
  size?: string;
};

const SpinnerBg: FC<SpinnerBgProps> = ({ color, size }) => {
  return (
    <svg
      fill="none"
      width={(size && sizes[size]) || 36}
      height={(size && sizes[size]) || 36}
      viewBox="0 0 36 36"
      stroke="currentColor"
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={18}
        cy={18}
        r={15}
        strokeWidth={6}
        strokeOpacity={0.2}
        stroke="currentColor"
      />
    </svg>
  );
};

SpinnerBg.displayName = "SpinnerBg";

export default SpinnerBg;
