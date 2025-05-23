import React from 'react';

interface ContactButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const ContactButton = ({ href, icon, label }: ContactButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition 
      bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 
      dark:text-white text-md hover:bg-zinc-900 
      hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 
      dark:hover:text-gray-800 group max-w-fit focus:outline-none focus-visible:outline-none 
      focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
  >
    {icon}
    {label}
  </a>
);
