// import { Footer } from '@/component';
import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-full min-h-screen w-full">
      <div className="container mx-auto py-5">{children}</div>
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
