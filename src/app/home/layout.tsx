import { Footer } from '@/component';
import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-base-300 h-full w-full">
      <div className="container mx-auto py-5">{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
