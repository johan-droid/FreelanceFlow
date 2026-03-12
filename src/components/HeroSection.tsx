'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>Financial clarity for independents
          </div>
          <h1 className="hero-h1">
            Stop Guessing.<br />
            <em>Start Knowing</em><br />
            Your Numbers.
          </h1>
          <p className="hero-sub">
            FreelanceFlow calculates your safe monthly spend, automates taxes, and gives you AI-powered financial guidance — built exclusively for the irregular income life.
          </p>
          <div className="trust-row">
            <span className="trust-badge">
              <span className="check">✓</span> 2,400+ freelancers
            </span>
            <span className="trust-badge">
              <span className="check">✓</span> SOC 2 Certified
            </span>
            <span className="trust-badge">
              <span className="check">✓</span> No credit card
            </span>
          </div>
          <div className="hero-ctas">
            <Link href="#" className="btn-primary">Start Free Trial →</Link>
            <Link href="#features" className="btn-secondary">▷ &nbsp;See how it works</Link>
          </div>
          <p className="hero-fine">14-day trial · Full Pro features · Cancel anytime</p>
        </div>

        <div className="hero-right">
          <div className="dashboard-wrap" style={{animationDelay: '0.3s'}}>
            {/* Floating cards */}
            <div className="float-card fc-1">
              <div className="fc-label">Annual tracked</div>
              <div className="fc-val">$52,800</div>
              <div className="fc-sub">↑ 18% vs last year</div>
            </div>
            <div className="float-card fc-2">
              <div className="fc-label">Tax reserved</div>
              <div className="fc-val">$6,200</div>
              <div className="fc-sub">Q2 due Jun 15</div>
            </div>

            <div className="dashboard-card">
              <div className="dash-header">
                <div className="dash-dots">
                  <div className="dash-dot"></div>
                  <div className="dash-dot"></div>
                  <div className="dash-dot"></div>
                </div>
                <div className="dash-title">FreelanceFlow Dashboard</div>
                <div style={{fontSize: '10px', color: 'var(--cream-dim)'}}>● Live</div>
              </div>
              <div className="dash-body">
                <div className="dash-row">
                  <div className="dash-metric">
                    <div className="dm-label">Safe to Spend</div>
                    <div className="dm-value gold" id="heroCountUp">$2,269</div>
                    <div className="dm-sub">Per month</div>
                    <div className="dm-badge badge-up">↑ HIGH confidence</div>
                  </div>
                  <div className="dash-metric">
                    <div className="dm-label">Tax Reserve</div>
                    <div className="dm-value green">$6,200</div>
                    <div className="dm-sub">25% auto-aside</div>
                    <div className="dm-badge badge-warn">Due Jun 15</div>
                  </div>
                </div>
                <div className="mini-chart">
                  <div className="mc-label">12-Month Income</div>
                  <div className="chart-bars" id="heroBars">
                    <div className="bar low" style={{height: '45%'}}></div>
                    <div className="bar gold" style={{height: '60%', animationDelay: '0.1s'}}></div>
                    <div className="bar green" style={{height: '80%', animationDelay: '0.2s'}}></div>
                    <div className="bar gold" style={{height: '55%', animationDelay: '0.3s'}}></div>
                    <div className="bar green" style={{height: '90%', animationDelay: '0.4s'}}></div>
                    <div className="bar gold" style={{height: '70%', animationDelay: '0.5s'}}></div>
                    <div className="bar low" style={{height: '40%', animationDelay: '0.6s'}}></div>
                    <div className="bar green" style={{height: '85%', animationDelay: '0.7s'}}></div>
                    <div className="bar gold" style={{height: '65%', animationDelay: '0.8s'}}></div>
                    <div className="bar green" style={{height: '75%', animationDelay: '0.9s'}}></div>
                    <div className="bar gold" style={{height: '50%', animationDelay: '1.0s'}}></div>
                    <div className="bar green" style={{height: '100%', animationDelay: '1.1s'}}></div>
                  </div>
                </div>
                <div className="ai-bubble">
                  <div className="ai-avatar">🤖</div>
                  <div className="ai-text">
                    <strong>Coach:</strong> Based on your Q4 income pattern, consider setting aside an extra $400 this month — a slow January is likely.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}