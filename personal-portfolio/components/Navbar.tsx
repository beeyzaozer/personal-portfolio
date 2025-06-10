'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/about', label: 'Hakkımda' },
  { href: '/projects', label: 'Projeler' },
  { href: '/contact', label: 'İletişim' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 w-full px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 shadow-lg border border-white/20">
        <h1 className="text-red-300 text-shadow-red-400 font-extrabold text-2xl">Beyza Özer</h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-white font-medium">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-pink-300 transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 shadow-md border border-white/20 text-white font-medium">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block hover:text-pink-300 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
