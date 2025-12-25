'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const cleanPath = pathname.replace('/tekweb_prak9', '');

  const isActive = (path) =>
    path === '/'
      ? cleanPath === '/'
      : cleanPath.startsWith(path);

  return (
    <nav className="bg-gray-800 px-8 py-4 flex gap-6 shadow-md">
      <Link
        href="/"
        className={
          isActive('/')
            ? 'text-white font-semibold border-b-2 border-white'
            : 'text-gray-300 hover:text-white'
        }
      >
        Home
      </Link>

      <Link
        href="/blog"
        className={
          isActive('/blog')
            ? 'text-white font-semibold border-b-2 border-white'
            : 'text-gray-300 hover:text-white'
        }
      >
        Blog
      </Link>

      <Link
        href="/about"
        className={
          isActive('/about')
            ? 'text-white font-semibold border-b-2 border-white'
            : 'text-gray-300 hover:text-white'
        }
      >
        About
      </Link>
    </nav>
  );
}
