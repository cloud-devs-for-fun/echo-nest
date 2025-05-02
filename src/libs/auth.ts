import 'next-auth/jwt';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import PostgresAdapter from '@auth/pg-adapter';

import pool from './conn';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [Google],
  // basePath: '/auth',
  // session: { strategy: 'jwt' },

  callbacks: {
    // authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl;
    //   if (pathname === '/') return !!auth;
    //   return true;
    // },

    // jwt({ token, user }) {
    //   if (user) {
    //     token.id = user.id;
    //   }
    //   return token;
    // },

    session({ session }) {
      // if (token.idToken) {
      //   session.user.id = token.idToken;
      // }

      console.log(session.userId);
      return session;
    },
  },
});

// declare module 'next-auth' {
//   interface Session {
//     accessToken?: string;
//   }
// }

// declare module 'next-auth/jwt' {
//   interface JWT {
//     idToken?: string;
//   }
// }
