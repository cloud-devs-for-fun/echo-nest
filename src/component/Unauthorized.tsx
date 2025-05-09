import React from 'react';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export const Unauthorized = () => {
  return (
    <main className="flex h-full min-h-screen w-full items-center justify-center">
      <h1 className="text-7xl font-bold"> {StatusCodes.UNAUTHORIZED} </h1>

      <h1 className="text-2xl font-extralight">{ReasonPhrases.UNAUTHORIZED}</h1>
    </main>
  );
};

export default Unauthorized;
