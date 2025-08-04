'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navItems } from '../data/navItems'; // ← 追加

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const topSection = document.getElementById('top-section');
            const navbar = document.getElementById('navbar');
            if (topSection && navbar) {
                const topSectionBottom = topSection.getBoundingClientRect().bottom;
                if (topSectionBottom <= 0) {
                    navbar.classList.add('fixed', 'top-0');
                } else {
                    navbar.classList.remove('fixed', 'top-0');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header id="navbar" className="w-full bg-white/80 backdrop-blur z-50 shadow fixed top-0">
            <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
                <Link
                    href={"/"}
                    className="text-xl font-bold">ななのーと</Link>
                <button
                    className="text-2xl md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="メニューを開く"
                >
                    ☰
                </button>

                <ul
                    className={`${menuOpen ? 'flex' : 'hidden'
                        } md:flex flex-col md:flex-row md:items-center gap-6 text-sm font-medium text-gray-700`}
                >
                    {navItems.map(({ id, label }) => (
                        <li key={id}>
                            <Link
                                href={`/#${id}`}
                                className="hover:text-pink-500 transition-colors duration-200"
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
