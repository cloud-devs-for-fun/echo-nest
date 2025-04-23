import React from 'react';

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-base-100 text-base-content flex h-32 w-full items-center justify-center">
      <p className="text-base-content text-center">&copy; {date.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
