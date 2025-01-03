import React from 'react';
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Academic Assistant
          </Link>
          <div className="space-x-6">
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/applications" className="hover:text-blue-400">Mentorship</Link>
            <div className="relative inline-block group">
              <Link href="/resources" className="hover:text-blue-400">Resources</Link>
              <div className="hidden group-hover:block absolute bg-white text-black mt-2 py-2 rounded-lg shadow-lg">
                <Link href="/hackathons" className="block px-4 py-2 hover:bg-gray-100">Hackathons</Link>
                <Link href="/internships" className="block px-4 py-2 hover:bg-gray-100">Internships</Link>
                <Link href="/scholarships" className="block px-4 py-2 hover:bg-gray-100">Scholarships</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}