'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };

    if (!isMenuOpen) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

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

      <button
        type="button"
        className={`nav-mobile-toggle ${isMenuOpen ? 'open' : ''}`}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(v => !v)}
      >
        <span className="nav-mobile-bars" aria-hidden="true"></span>
      </button>

      <div
        className={`mobile-backdrop ${isMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div className={`mobile-panel ${isMenuOpen ? 'open' : ''}`}>
        <Link href="#features" onClick={closeMenu} className="mobile-link">Features</Link>
        <Link href="#pricing" onClick={closeMenu} className="mobile-link">Pricing</Link>
        <Link href="#testimonials" onClick={closeMenu} className="mobile-link">Stories</Link>
        <Link href="#security" onClick={closeMenu} className="mobile-link">Security</Link>

        <div className="mobile-divider" />
        <Link href="#" onClick={closeMenu} className="mobile-cta">Start Free Trial</Link>
      </div>
    </nav>
  );
}