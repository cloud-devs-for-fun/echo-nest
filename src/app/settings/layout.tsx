// import { Footer } from '@/component';

import React, { PropsWithChildren } from 'react';

import { auth } from '@/libs/auth';
import { Unauthorized } from '@/component';

const SettingsLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  if (!session) return <Unauthorized />;

  return (
    <main className="h-full min-h-screen w-full">
      <div className="container mx-auto py-5">{children}</div>
      {/* <Footer /> */}
    </main>
  );
};

export default SettingsLayout;
