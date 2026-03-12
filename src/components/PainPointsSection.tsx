'use client';

import { useEffect, useRef } from 'react';

export default function PainPointsSection() {
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
      const cards = sectionRef.current.querySelectorAll('.problem-card');
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="problems" ref={sectionRef}>
      <div className="section-inner problems">
        <div className="problems-header">
          <span className="section-label">The freelance money problem</span>
          <h2 className="section-h2">
            You&apos;re not bad with money.<br />The system just wasn&apos;t built <em>for you.</em>
          </h2>
          <p className="section-sub" style={{marginTop: '12px'}}>
            Traditional budgeting apps assume a steady paycheck. Yours isn&apos;t. That&apos;s not a flaw — it&apos;s a different mode of working that demands a different financial tool.
          </p>
        </div>
        <div className="problems-grid">
          <div className="problem-card" data-delay="0">
            <div className="pc-icon amber">📊</div>
            <h3 className="pc-title">Unpredictable Monthly Income</h3>
            <p className="pc-desc">
              $3k one month, $9k the next. Traditional apps shrug. FreelanceFlow uses your trailing income history to set a spending number that stays sane across feast-or-famine cycles.
            </p>
            <div className="pc-stat amber">±$4,200</div>
            <div className="pc-stat-label">average monthly income swing</div>
          </div>
          <div className="problem-card" data-delay="150">
            <div className="pc-icon red">🧾</div>
            <h3 className="pc-title">Tax Season Anxiety</h3>
            <p className="pc-desc">
              Quarterly taxes, self-employment tax, progressive brackets — you&apos;re not an accountant. FreelanceFlow calculates your exact obligations, reserves the right amount, and reminds you before deadlines.
            </p>
            <div className="pc-stat red">$4,800</div>
            <div className="pc-stat-label">average surprise tax bill avoided</div>
          </div>
          <div className="problem-card" data-delay="300">
            <div className="pc-icon green">💸</div>
            <h3 className="pc-title">Overspending in Good Months</h3>
            <p className="pc-desc">
              Earning $9k feels great — until February. A safe-to-spend number prevents the feast mentality from creating famine problems. Spend confidently, not recklessly.
            </p>
            <div className="pc-stat green">63%</div>
            <div className="pc-stat-label">of users report less financial anxiety</div>
          </div>
        </div>
      </div>
    </section>
  );
}