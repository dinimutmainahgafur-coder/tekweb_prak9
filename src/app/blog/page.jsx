import Link from 'next/link';
import { posts } from '../../data/posts';

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Blog & Artikel
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Kumpulan artikel seputar Next.js, React, dan pengembangan web modern
            yang mudah dipahami untuk mahasiswa.
          </p>
        </div>

        {/* Blog List */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
            >
              <span className="text-xs text-blue-600 font-semibold mb-2">
                📅 {post.date}
              </span>

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                ✍️ {post.author}
              </p>

              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {post.content}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto inline-block text-blue-600 font-semibold hover:underline"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
