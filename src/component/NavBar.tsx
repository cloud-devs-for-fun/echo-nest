'use client';

import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export const NavBar = () => {
  const { data: session } = useSession();

  const handleLogin = () => {
    signIn('google', { redirectTo: '/home' });
  };

  const handleLogout = () => {
    signOut({ redirectTo: '/' });
  };

  console.log(session);

  return (
    <nav className="flex w-full justify-end px-6 py-4">
      <div className="flex items-center gap-4">
        {session ? (
          <>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                {session?.user?.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name ?? 'User avatar'}
                    height={250}
                    width={250}
                  />
                )}
              </div>
            </div>
            <span className="text-sm text-gray-600">Hi, {session.user?.name}</span>
            <button onClick={handleLogout} className="btn btn-sm btn-outline normal-case">
              Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="btn btn-sm btn-ghost normal-case">
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
