'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';

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
                <div className="text-xl font-bold">ななしお</div>
                <button className="text-xl md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <ul className={`flex-col md:flex-row md:flex gap-6 text-sm font-medium text-gray-700 ${menuOpen ? 'flex' : 'hidden'}`}>
                    <li><Link href="/#top" className="hover:text-pink-500 transition">Top</Link></li>
                    <li><Link href="/#news" className="hover:text-pink-500 transition">News</Link></li>
                    <li><Link href="/#profile" className="hover:text-pink-500 transition">Profile</Link></li>
                    <li><Link href="/#story" className="hover:text-pink-500 transition">Story</Link></li>
                    <li><Link href="/#character" className="hover:text-pink-500 transition">Character</Link></li>
                    <li><Link href="/#gallery" className="hover:text-pink-500 transition">Gallery</Link></li>
                    <li><Link href="/#special" className="hover:text-pink-500 transition">Special</Link></li>
                </ul>
            </nav>
        </header>
    )
}
