import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className='flex min-h-screen w-full items-center justify-center'>
      {children}
    </main>
  );
};

export default Layout;
