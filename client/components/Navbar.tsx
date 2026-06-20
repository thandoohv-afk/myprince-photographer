"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          MYPrince Photography
        </Link>

        <div className="flex gap-6 text-white">

          <Link href="/">Home</Link>

          <Link href="/portfolio">
            Portfolio
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/services">
            Services
          </Link>

          <Link href="/contact">
            Contact
          </Link>

          <Link
            href="/book"
            className="bg-white text-black px-4 py-2 rounded-full"
          >
            Book Now
          </Link>

        </div>

      </div>

    </nav>
  );
}