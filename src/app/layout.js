'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // fungsi untuk menentukan class aktif
  const navLinkClass = (path) =>
    pathname === path
      ? 'text-black-700 font-bold border-b-2 border-black-700'
      : 'text-black-900 hover:text-white-800';

  return (
    <html lang="id">
      <body className="bg-gray-100 text-gray-900">
        <nav className="p-4 bg-slate-600 shadow-md flex gap-6">
          <Link href="/" className={navLinkClass('/')}>
            Home
          </Link>

          <Link href="/blog" className={navLinkClass('/blog')}>
            Blog
          </Link>

          <Link href="/about" className={navLinkClass('/about')}>
            About
          </Link>
        </nav>

        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
