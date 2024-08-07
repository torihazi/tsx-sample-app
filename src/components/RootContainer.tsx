import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const RootContainer = ({ children }: Props) => {
  return <div className="container-fluid">{children}</div>;
};
