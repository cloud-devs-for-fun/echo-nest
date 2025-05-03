import React from 'react';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export const Unauthorized = () => {
  return (
    <div className="text-center">
      <h1 className="text-7xl font-bold"> {StatusCodes.UNAUTHORIZED} </h1>

      <h1 className="text-2xl font-extralight">{ReasonPhrases.UNAUTHORIZED}</h1>
    </div>
  );
};

export default Unauthorized;
