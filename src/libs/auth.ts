import 'next-auth/jwt';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

import PostgresAdapter from '@auth/pg-adapter';

import pool from './conn';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PostgresAdapter(pool),
  providers: [
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }

      console.log('token jwt', token);
      return token;
    },

    session({ session }) {
      console.log('session', session.userId);

      return session;
    },
  },
});
