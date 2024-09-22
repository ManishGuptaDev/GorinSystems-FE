import { type FC } from "react";

const Menu: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.76184 6L20.7618 6M10.2618 12L20.7618 12M4.76184 18L20.7618 18"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

export default Menu;
