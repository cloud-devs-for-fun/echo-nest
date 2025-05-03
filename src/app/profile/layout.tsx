// import { Footer } from '@/component';
import { Unauthorized } from '@/component';
import { auth } from '@/libs/auth';
import React, { PropsWithChildren } from 'react';

const ProfileLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  if (!session) return <Unauthorized />;

  return (
    <main className="h-full min-h-screen w-full">
      <div className="container mx-auto py-5">{children}</div>
      {/* <Footer /> */}
    </main>
  );
};

export default ProfileLayout;
