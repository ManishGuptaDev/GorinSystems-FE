import { FC, PropsWithChildren } from "react";
import Header from "../organisms/Header";

const RootTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootTemplate;
