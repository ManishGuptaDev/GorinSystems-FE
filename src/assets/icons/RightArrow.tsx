import { type FC } from "react";

const RightArrow: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.83333 1.44873L11 5.82373M11 5.82373L6.83333 10.1987M11 5.82373L1 5.82373"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default RightArrow;
