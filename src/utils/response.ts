import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export const jsonResponse = <T>(data: T, statusCode: StatusCodes): Response => {
  const statusKey = StatusCodes[statusCode] as keyof typeof ReasonPhrases;
  const statusText = ReasonPhrases[statusKey];

  return new Response(
    JSON.stringify({
      data,
      statusCode,
      statusText,
    }),
    {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    },
  );
};
