'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <Link href="#" className="logo">
        <div className="logo-icon">₣</div>
        FreelanceFlow
      </Link>
      <ul className="nav-links">
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#pricing">Pricing</Link></li>
        <li><Link href="#testimonials">Stories</Link></li>
        <li><Link href="#security">Security</Link></li>
      </ul>
      <button className="nav-cta">Start Free Trial</button>
    </nav>
  );
}