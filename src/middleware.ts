import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (req: NextRequest) => {
  console.info('middleware', req.cookies);

  const token = req.cookies.get('authjs.session-token')?.value;
  console.info('token session', token);

  if (!token) {
    console.info('no token');
    return NextResponse.next();
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
