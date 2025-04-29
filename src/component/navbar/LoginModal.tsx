import React from 'react';
import { signIn } from 'next-auth/react';
import GoogleButton from 'react-google-button';
import { cn } from '@/libs/cn';
import { CircleX } from 'lucide-react';

interface ILoginModal {
  open: boolean;
  close: () => void;
}

export const LoginModal = ({ open, close }: ILoginModal) => {
  const handleLogin = (): void => {
    signIn('google', { redirectTo: '/home' });
  };

  return (
    <div className={cn(`modal`, open && 'modal-open')}>
      <div className="modal-box modal-middle h-auto bg-white">
        <button className="btn btn-circle btn-ghost absolute top-2 right-2" onClick={close}>
          <CircleX strokeWidth={3} />
        </button>

        <h3 className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-lg font-bold text-transparent">
          Choose your desire login method!
        </h3>
        <div className="mt-4">
          <GoogleButton onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
