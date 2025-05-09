'use client';

import React, { ReactNode } from 'react';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Cog, LogOut, UserPen } from 'lucide-react';

import Avatar from '../Avatar';

interface IUser {
  session: Session;
}

export const User = ({ session }: IUser) => {
  const router = useRouter();
  const handleLogout = (): void => {
    signOut({ redirectTo: '/' });
  };

  const renderDropdown = (avatar: ReactNode) => {
    return (
      <div className="dropdown dropdown-end">
        {avatar}

        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box z-1 mt-5 w-52 bg-white p-2 shadow-sm outline"
          aria-labelledby="user-menu"
        >
          <li>
            <button className="btn btn-ghost justify-start" onClick={() => router.push('/profile')}>
              <UserPen size={16} strokeWidth={3} />

              <span>{session.user?.name}</span>
            </button>
          </li>
          <li>
            <button
              className="btn btn-ghost justify-start"
              onClick={() => router.push('/settings')}
            >
              <Cog size={16} strokeWidth={3} />
              Settings
            </button>
          </li>
          <li>
            <button onClick={handleLogout} className="btn btn-ghost justify-start">
              <LogOut strokeWidth={3} size={16} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    );
  };

  const renderAvatar = () => {
    return renderDropdown(
      <div tabIndex={0} className="hover:cursor-pointer">
        {session?.user?.image && (
          <Avatar
            type="image"
            src={session.user.image}
            alt={session.user.name ?? 'User avatar'}
            className="w-10"
          />
        )}
      </div>,
    );
  };

  return (
    <>
      <span className="text-sm">Welcome, {session.user?.name?.split(/\s+/)[0]}</span>

      {renderAvatar()}
    </>
  );
};

export default User;
