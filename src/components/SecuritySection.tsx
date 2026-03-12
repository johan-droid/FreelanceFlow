 'use client';

import { useEffect, useRef } from 'react';

export default function SecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const delay = parseInt(el.dataset.delay || '0');
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.sec-card, .partner-item');
      items.forEach(item => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="security" ref={sectionRef}>
      <div className="section-inner">
        <div className="text-center">
          <div className="divider-line mx-auto"></div>
          <span className="section-label">Trust & security</span>
          <h2 className="section-h2">
            Your financial data deserves<br />
            <em>bank-level care.</em>
          </h2>
        </div>
        <div className="security-grid">
          <div className="sec-card" data-delay="0">
            <div className="sec-icon">🔐</div>
            <div className="sec-title">Bank-Level Encryption</div>
            <p className="sec-desc">
              Every byte of your data is encrypted with AES-256 at rest and TLS 1.3 in transit. Keys rotate every 90 days. Backups encrypted on Amazon S3.
            </p>
            <ul className="sec-list">
              <li>AES-256 encryption at rest</li>
              <li>TLS 1.3 for all communications</li>
              <li>Encrypted backups on AWS S3</li>
              <li>90-day automatic key rotation</li>
            </ul>
          </div>
          <div className="sec-card" data-delay="160">
            <div className="sec-icon">🛡️</div>
            <div className="sec-title">SOC 2 Type II Certified</div>
            <p className="sec-desc">
              Independently audited annually. Our security controls, availability, and confidentiality commitments are verified by a third-party firm — not just promised.
            </p>
            <ul className="sec-list">
              <li>Annual third-party security audits</li>
              <li>Formal incident response plan</li>
              <li>Regular penetration testing</li>
              <li>Zero data breaches since launch</li>
            </ul>
          </div>
          <div className="sec-card" data-delay="320">
            <div className="sec-icon">🌍</div>
            <div className="sec-title">GDPR & Privacy Ready</div>
            <p className="sec-desc">
              Full GDPR compliance with data portability, right to erasure, and consent transparency. Your data is yours — export or delete it at any time in one click.
            </p>
            <ul className="sec-list">
              <li>One-click data export</li>
              <li>Right to deletion honored instantly</li>
              <li>Consent tracking & audit log</li>
              <li>No data sold to third parties. Ever.</li>
            </ul>
          </div>
        </div>
        <div className="partner-row">
          <div className="partner-item" data-delay="420">
            <div className="partner-name">PLAID</div>
            <div className="partner-sub">Bank connectivity</div>
          </div>
          <div className="partner-item" data-delay="500">
            <div className="partner-name">STRIPE</div>
            <div className="partner-sub">Payment processing</div>
          </div>
          <div className="partner-item" data-delay="580">
            <div className="partner-name">AWS</div>
            <div className="partner-sub">Infrastructure</div>
          </div>
          <div className="partner-item" data-delay="660">
            <div className="partner-name">ANTHROPIC</div>
            <div className="partner-sub">AI coaching</div>
          </div>
        </div>
      </div>
    </section>
  );
}