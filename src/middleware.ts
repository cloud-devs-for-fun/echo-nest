import { NextRequest } from 'next/server';

export const middleware = async (req: NextRequest) => {
  return console.log('middleware', req.cookies);
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
