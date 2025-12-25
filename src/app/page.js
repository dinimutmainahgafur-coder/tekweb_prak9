import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6">

        <Image
          className="mb-10 dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={30}
          priority
        />

        <h1 className="text-3xl font-semibold text-black dark:text-white mb-4 text-center">
          To get started, edit the page.js file.
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 text-center max-w-xl">
          Looking for a starting point or more instructions? Head over to{" "}
          <a
            href="https://vercel.com/templates"
            className="font-medium text-black dark:text-white"
          >
            Templates
          </a>{" "}
          or the{" "}
          <a
            href="https://nextjs.org/learn"
            className="font-medium text-black dark:text-white"
          >
            Learning
          </a>{" "}
          center.
        </p>

        <div className="flex gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 hover:bg-zinc-800 dark:bg-white dark:text-black"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel Logo"
              width={16}
              height={16}
            />
            Deploy Now
          </Link>

          <Link
            href="/about"
            className="rounded-full border border-black px-6 py-3 hover:bg-zinc-100 dark:border-white dark:hover:bg-zinc-900"
          >
            Documentation
          </Link>
        </div>

      </main>
    </div>
  );
}
 