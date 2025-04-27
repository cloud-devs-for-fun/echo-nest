'use client';

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { cn } from '@/libs/cn';

import LoginModal from './LoginModal';
import User from './User';
import { navigationItems } from './utils';

interface ILoginBtn {
  handleLogin: () => void;
}

const LoginButton = ({ handleLogin }: ILoginBtn) => {
  return (
    <button
      onClick={handleLogin}
      className="btn btn-sm btn-active text-base-content bg-base-300 normal-case"
    >
      Login
    </button>
  );
};

export const NavBar = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const navigate = useRouter();

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
          'text-base-content bg-neutral flex w-full items-center justify-between px-6 py-4',
        )}
      >
        <h1 className="text-2xl font-semibold tracking-widest text-white">ECHO NEST</h1>

        <div>
          {navigationItems.map((nav, ids) => (
            <button key={ids} onClick={() => navigate.push(nav.path)} className="btn btn-link">
              {nav.icon}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {session ? <User session={session} /> : <LoginButton handleLogin={handleOpenLogin} />}
        </div>
      </nav>

      <LoginModal open={openLogin} close={handleCloseLogin} />
    </>
  );
};

export default NavBar;
