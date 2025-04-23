'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

const Index = () => {
  const handleLogin = () => {
    signIn('google', { redirectTo: '/home' });
  };

  return (
    <main className="bg-base-100 text-base-content flex min-h-screen flex-col">
      <div className="flex flex-grow flex-col items-center justify-center gap-5 px-4">
        <h1 className="text-center text-5xl font-bold md:text-6xl">Echo Nest</h1>
        <h2 className="text-center text-xl md:text-2xl">The Resonance of Ideas</h2>
        <p className="max-w-xl text-center">
          A space where thoughts echo, grow, and spark new possibilities. Discover ideas that
          resonate and ripple through minds.
        </p>

        <button onClick={handleLogin} className="btn btn-neutral text-sm normal-case">
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Index;
