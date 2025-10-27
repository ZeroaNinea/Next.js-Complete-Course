import Link from 'next/link';

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
  return (
    <div>
      <div className="flex gap-4">
        {navLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
