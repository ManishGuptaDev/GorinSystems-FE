import { type FC } from "react";

const Lock: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="10"
    height="13"
    viewBox="0 0 10 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.84999 4.63324V4.0999C1.84999 2.3272 3.25499 0.899902 4.99999 0.899902C6.74499 0.899902 8.14999 2.3272 8.14999 4.0999V4.63324M1.84999 4.63324C1.27249 4.63324 0.799988 5.11324 0.799988 5.6999V11.0332C0.799988 11.6199 1.27249 12.0999 1.84999 12.0999H8.14999C8.72749 12.0999 9.19999 11.6199 9.19999 11.0332V5.6999C9.19999 5.11324 8.72749 4.63324 8.14999 4.63324M1.84999 4.63324H8.14999M4.99999 8.9499V7.5499"
      stroke="black"
      stroke-linecap="round"
    />
  </svg>
);

export default Lock;
