import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Assuming these are your preferred fonts
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"; // Added ClerkProvider and other components
import Link from "next/link"; // Added Link for navigation

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mobile Pantry", // Updated title
  description: "Welcome to Mobile Pantry", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="p-4 flex justify-between items-center border-b">
            <Link href="/">
              <span className="text-xl font-semibold cursor-pointer">Mobile Pantry</span>
            </Link>
            <div>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
              <SignedOut>
                <Link href="/sign-in" className="mr-4 text-blue-600 hover:underline">
                  Sign In
                </Link>
                <Link href="/sign-up" className="text-blue-600 hover:underline">
                  Sign Up
                </Link>
              </SignedOut>
            </div>
          </header>
          <main>{children}</main> {/* Wrapped children in main for better semantics */}
        </body>
      </html>
    </ClerkProvider>
  );
}