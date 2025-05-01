'use client';

import React from 'react';

import { cn } from '@/libs/cn';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Index = () => {
  const { status } = useSession();
  const router = useRouter();

  const handleRedirect = () => {
    if (status === 'unauthenticated') return signIn('google', { redirectTo: '/home' });

    return router.push('/home');
  };

  return (
    <main className={cn('flex min-h-screen flex-col')}>
      <div className="flex flex-grow flex-col items-center justify-center gap-5 px-4">
        <h1 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-center text-5xl font-bold text-transparent md:text-6xl">
          Echo Nest
        </h1>

        <h2 className="text-center text-xl text-black md:text-2xl">The Resonance of Ideas</h2>
        <p className="max-w-xl text-center text-black">
          A space where thoughts echo, grow, and spark new possibilities. Discover ideas that
          resonate and ripple through minds.
        </p>

        <button onClick={handleRedirect} className="btn btn-wide btn-xl btn-outline">
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Get started
          </span>
        </button>
      </div>
    </main>
  );
};

export default Index;
