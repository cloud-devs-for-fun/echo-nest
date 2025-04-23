import { Footer } from '@/component';
import React, { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
