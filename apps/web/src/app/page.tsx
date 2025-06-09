// apps/web/src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center text-center">
        <h1 className="text-5xl font-bold">Welcome to Mobile Pantry</h1>
        <p className="text-lg text-gray-600">
          Your solution for accessible and convenient pantry services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {/* <Link href="/about">
            <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg">
              Learn More
            </a>
          </Link> */}
          <Link href="/about"className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg">Learn More</Link>
          <Link href="/sign-in"className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg">Login</Link>
          <Link href="/sign-up"className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-lg">Sign Up</Link>
        </div>
      </main>
      <footer className="mt-16 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Mobile Pantry. All rights reserved.</p>
      </footer>
    </div>
  );
}
