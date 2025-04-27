'use client';

import React, { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Session } from 'next-auth';
import { usePathname } from 'next/navigation';

import { cn } from '@/libs/cn';

import LoginModal from './LoginModal';

export const NavBar = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const path = usePathname();

  const { data: session } = useSession();

  const handleLogout = (): void => {
    signOut({ redirectTo: '/' });
  };

  const handleOpenLogin = (): void => {
    return setOpenLogin(!openLogin);
  };

  const handleCloseLogin = (): void => {
    return setOpenLogin(!openLogin);
  };

  console.log(session?.user?.id);

  const renderAvatar = (session: Session) => {
    return (
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
    );
  };

  return (
    <>
      <nav
        className={cn(
          'text-base-content flex w-full justify-end px-6 py-4',
          path !== '/' ? 'bg-base-100' : 'bg-neutral',
        )}
      >
        <div className="flex items-center gap-4">
          {session ? (
            renderAvatar(session)
          ) : (
            <button
              onClick={handleOpenLogin}
              className="btn btn-sm btn-active text-base-content bg-base-300 normal-case"
            >
              Login
            </button>
          )}
        </div>
      </nav>

      <LoginModal open={openLogin} close={handleCloseLogin} />
    </>
  );
};

export default NavBar;
