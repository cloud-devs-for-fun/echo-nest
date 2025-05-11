import 'next-auth/jwt';
import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import pino from 'pino';

import PostgresAdapter from '@auth/pg-adapter';

import pool from './conn';

const logger = pino();

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

      logger.info('token jwt', token);
      return token;
    },

    session({ session }) {
      logger.info('sessionID', session.userId);

      return session;
    },
  },
});
