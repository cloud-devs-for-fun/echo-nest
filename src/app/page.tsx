import React from 'react';
import Link from 'next/link';

const Index = () => {
  return (
    <div className="bg-base-100 text-base-content flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col items-center justify-center px-4">
        <h1 className="mb-4 text-center text-4xl font-bold md:text-6xl">Echo Nest</h1>
        <h2 className="mb-6 text-center text-xl text-gray-500 md:text-2xl">
          The Resonance of Ideas
        </h2>
        <p className="mb-8 max-w-xl text-center text-gray-500">
          A space where thoughts echo, grow, and spark new possibilities. Discover ideas that
          resonate and ripple through minds.
        </p>

        <Link href={'/home'} className='btn btn-neutral normal-case" text-sm'>
          Get Started
        </Link>
      </main>
    </div>
  );
};

export default Index;
