import Link from "next/link";
import { posts } from "../../../data/posts";

// ⬇️ Tambahkan ini
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetail({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="mt-10 text-center">Artikel tidak ditemukan</div>;
  }

  return (
    <article className="max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>

      <div className="text-sm text-gray-500 mb-6">
        ✍️ {post.author} • 📅 {post.date}
      </div>

      <p>{post.content}</p>

      <br />

      <Link href="/blog" className="text-blue-600 hover:underline">
        ← Kembali ke Daftar
      </Link>
    </article>
  );
}
