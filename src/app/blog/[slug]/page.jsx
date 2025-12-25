import Link from 'next/link';
import { posts } from '../../../data/posts';


export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetail({ params }) {
  const { slug } = params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 mt-10">
        Artikel tidak ditemukan!
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      <div className="text-sm text-gray-500 mb-6">
        Ditulis oleh <span className="font-semibold">{post.author}</span> • {post.date}
      </div>

      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>

      <br />
      <Link
        href="/tekweb_prak9/blog"
        className="text-blue-600 hover:underline"
      >
        ← Kembali ke Daftar
      </Link>
    </article>
  );
}
