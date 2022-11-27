import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b-4 border-secondary bg-primary">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <Link href="#maincontent" className="hidden">
          Skip to main content
        </Link>
        <div className="menu flex justify-between py-2 text-white">
          <div className="logo text-2xl font-bold">
            <Link href="/">Kunji Foundation</Link>
          </div>
          <nav className="flex">
            <ul className="flex justify-end text-lg">
              <li className="ml-4 px-4">
                <Link href="/learn">Learn</Link>
              </li>
              <li className="ml-4 px-4">
                <Link href="/mentor">Find a Mentor</Link>
              </li>
              <li className="ml-4 px-4">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="ml-4 px-4 pr-0">
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
