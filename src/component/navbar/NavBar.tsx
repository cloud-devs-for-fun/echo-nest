'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

import { cn } from '@/libs/cn';

import LoginModal from './LoginModal';
import User from './User';

export const NavBar = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const { data: session } = useSession();

  const handleOpenLogin = (): void => {
    return setOpenLogin(!openLogin);
  };

  const handleCloseLogin = (): void => {
    return setOpenLogin(!openLogin);
  };

  console.log(session?.user?.id);

  return (
    <>
      <nav className={cn('text-base-content bg-neutral flex w-full justify-end px-6 py-4')}>
        <div className="flex items-center gap-4">
          {session ? (
            <User session={session} />
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
