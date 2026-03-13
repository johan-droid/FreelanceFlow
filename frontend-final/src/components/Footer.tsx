import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">₣ FreelanceFlow</div>
            <p className="footer-tagline">
              Taking the stress out of freelance finances — one safe-to-spend number at a time.
            </p>
            <div className="footer-socials">
              <div className="social-btn">𝕏</div>
              <div className="social-btn">in</div>
              <div className="social-btn">gh</div>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="#security">Security</Link></li>
              <li><Link href="#">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press Kit</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Help</div>
            <ul className="footer-links">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Documentation</Link></li>
              <li><Link href="#">Contact</Link></li>
              <li><Link href="#">API Docs</Link></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Status</div>
            <div className="status-row">
              <span className="status-dot"></span>All systems go
            </div>
            <p style={{fontSize: '11px', color: 'rgba(191,184,168,0.4)', marginTop: '6px'}}>
              Checked 2 min ago
            </p>
            <ul className="footer-links" style={{marginTop: '12px'}}>
              <li><Link href="#">Status Page</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 FreelanceFlow. Made with ♥ for freelancers, by freelancers.
          </span>
          <div className="footer-legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}