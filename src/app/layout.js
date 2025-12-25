import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Blog Next.js Saya',
  description: 'Belajar Next.js App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gray-100 text-gray-900">
        <nav className="p-4 bg-gray-700 shadow-md flex gap-4">
          <Link href="/tekweb_prak9" className="font-bold text-blue-600">
            Home
          </Link>
          <Link href="/tekweb_prak9/blog">
            Blog
          </Link>
          <Link href="/tekweb_prak9/about">
            About
          </Link>
        </nav>

        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
