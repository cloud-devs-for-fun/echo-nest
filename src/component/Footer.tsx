import React from 'react';

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="footer footer-horizontal footer-center bg-(--background-dark) p-10">
      <aside>
        <p className="text-white">
          Copyright &copy; {date.getFullYear()} - All right reserved by EchoNest Team
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
