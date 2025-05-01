// app/(protected)/layout.tsx

import { auth } from '@/libs/auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export const ProtectedLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return <>{children}</>;
};
