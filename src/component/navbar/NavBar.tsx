'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

import { cn } from '@/libs/cn';

import LoginModal from './LoginModal';
import User from './User';

interface ILoginBtn {
  handleLogin: () => void;
}

const LoginButton = ({ handleLogin }: ILoginBtn) => {
  return (
    <button onClick={handleLogin} className="btn btn-md btn-outline normal-case">
      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Login
      </span>
    </button>
  );
};

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
      <nav
        className={cn(
          'flex w-full items-center px-6 py-4',
          session ? 'justify-between' : 'justify-end',
          session && 'bg-(--background-dark)',
        )}
      >
        {session ? (
          <>
            <h1 className="text-2xl font-semibold tracking-widest text-white">ECHO NEST</h1>
            <div className="flex items-center gap-4">
              <User session={session} />
            </div>
          </>
        ) : (
          <LoginButton handleLogin={handleOpenLogin} />
        )}
      </nav>

      <LoginModal open={openLogin} close={handleCloseLogin} />
    </>
  );
};

export default NavBar;
