'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import './styles.css';

const navLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
  { name: 'Forgot Password', href: '/forgot-password' },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState('');
  const pathName = usePathname();

  return (
    <div>
      <div className="flex gap-4">
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        {navLinks.map((link) => {
          const isActive = pathName === link.href;

          return (
            <Link
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
              key={link.name}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
