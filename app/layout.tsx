import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites",
  description: "Fresh weeknight recipes built with Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="navbar-inner">
            <Link href="/" className="brand">
              NextBites
            </Link>
            <div className="nav-links">
              <Link href="/">Recipes</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
