import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-end items-center px-6 py-4 bg-white border-b border-gray-200">
     
      <div className="flex items-center space-x-4">
       
        <Link
          href="/login"
          className="px-4 py-2 border border-gray-300 bg-[#ffffff] text-[#171717] dark:text-[#0a0a0a]  dark:bg-[#ededed] rounded-[6px]  "
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2  bg-[#171717] dark:text-[#ededed] dark:bg-[#0a0a0a] text-[#ededed] rounded-[6px] "
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;