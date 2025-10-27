'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const pathName = usePathname();

  return (
    <div>
      <div className="flex gap-4">
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
