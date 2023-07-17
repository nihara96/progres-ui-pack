import React, { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
  className?:string, 
};

const Layout: React.FC<LayoutProps> = ({ children,className}) => {
  return <div className={`max-w-[1400px] mx-auto ${className}`}>{children}</div>;
};

export default Layout;
