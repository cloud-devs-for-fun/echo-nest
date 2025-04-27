import React, { ReactNode } from 'react';
import Image from 'next/image';
import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import { Cog, LogOut, ShieldUser } from 'lucide-react';

interface IUser {
  session: Session;
}

const User = ({ session }: IUser) => {
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
            <button className="btn btn-ghost justify-start">
              <ShieldUser size={16} strokeWidth={3} />
              <span>{session.user?.name}</span>
            </button>
          </li>
          <li>
            <button className="btn btn-ghost justify-start">
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
      <div tabIndex={0} role="button" className="avatar hover:cursor-pointer">
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
      </div>,
    );
  };

  return (
    <>
      <span className="text-sm text-white">Welcome, {session.user?.name?.split(/\s+/)[0]}</span>

      {renderAvatar()}
    </>
  );
};

export default User;
