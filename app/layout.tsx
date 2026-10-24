import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SocialLinks from "./components/SocialLinks";

export const metadata: Metadata = {
  title: "Ibrahim Mansur | Fullstack Developer",
  description:
    "Ibrahim Mansur builds fullstack web apps with React and TypeScript at Ibn Rabia Softwares Inc.",
};

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            Ibrahim Mansur
          </Link>
          <nav aria-label="Main">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>Ibn Rabia Softwares Inc.</p>
          <SocialLinks />
        </footer>
      </body>
    </html>
  );
}
