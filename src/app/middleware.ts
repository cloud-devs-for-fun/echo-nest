export { auth as middleware } from '@/libs/auth';
// import { NextRequest, NextResponse } from 'next/server';

// export const middleware = async (req: NextRequest) => {
//   const path = req.nextUrl.pathname;

//   if (path === '/') {
//     return NextResponse.next();
//   }

//   const session = await auth();

//   if (!session) {
//     return NextResponse.redirect(new URL('/', req.nextUrl));
//   }

//   return NextResponse.next();
// };

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
};
