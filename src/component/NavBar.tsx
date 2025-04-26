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
    <nav className="bg-base-100 text-base-content flex w-full justify-end px-6 py-4">
      <div className="flex items-center gap-4">
        {session ? (
          <button onClick={handleLogout} className="btn btn-ghost normal-case">
            <span className="text-base-content text-sm">Hi, {session.user?.name}</span>

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
          </button>
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
