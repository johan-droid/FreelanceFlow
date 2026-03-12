'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleBilling = () => {
    setIsAnnual(!isAnnual);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What's included in the free tier?",
      answer: "Income & expense tracking, basic tax estimates, 3 months of history, and unlimited invoices. No bank connection or AI Coach on the free tier — but enough to see if FreelanceFlow clicks for you."
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Yes. Upgrade instantly — your data carries over. Downgrade with 7 days notice. No lock-in contracts, no cancellation fees. We'd rather earn your subscription every month."
    },
    {
      question: "Is my bank data secure?",
      answer: "Bank connections are read-only via Plaid. We never see your credentials and cannot initiate transactions. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We're SOC 2 Type II certified."
    },
    {
      question: "What countries does the tax engine support?",
      answer: "Currently US (federal + state), UK (PAYE/self-assessment), and Australia (GST + income tax). Canada and New Zealand are on the roadmap for Q3 2025. Request your country in-app."
    }
  ];

  return (
    <section id="pricing">
      <div className="section-inner">
        <div className="text-center">
          <span className="section-label">Pricing</span>
          <h2 className="section-h2">
            Simple pricing.<br />
            <em>No surprises.</em>
          </h2>
          <p className="section-sub mx-auto" style={{textAlign: 'center', marginTop: '10px'}}>
            The irony of a financial app with hidden fees wouldn&apos;t be lost on us. One plan for most freelancers.
          </p>
          <div className="pricing-toggle-wrap" style={{marginTop: '24px'}}>
            <span className="ptw-label">Monthly</span>
            <div className={`toggle-track ${isAnnual ? 'on' : ''}`} onClick={toggleBilling}>
              <div className="toggle-thumb"></div>
            </div>
            <span className="ptw-label">Annually</span>
            <span className="save-badge">Save 20%</span>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Starter */}
          <div className="price-card">
            <div className="pc-plan">Starter</div>
            <div className="pc-price">Free</div>
            <div className="pc-period">forever</div>
            <div className="pc-savings">&nbsp;</div>
            <ul className="pc-features">
              <li><span className="pcf-check">✓</span><span className="pcf-text">Income tracking</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Basic tax estimates</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">3 months history</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Unlimited invoices</span></li>
              <li><span className="pcf-x">✗</span><span className="pcf-text dim">Bank sync (Plaid)</span></li>
              <li><span className="pcf-x">✗</span><span className="pcf-text dim">AI Coach</span></li>
              <li><span className="pcf-x">✗</span><span className="pcf-text dim">Multi-currency</span></li>
            </ul>
            <button className="pc-btn outlined">Get Started Free</button>
          </div>

          {/* Pro */}
          <div className="price-card featured">
            <div className="popular-badge">Most Popular</div>
            <div className="pc-plan">Pro</div>
            <div className="pc-price">
              $<span>{isAnnual ? '23' : '29'}</span>
            </div>
            <div className="pc-period">
              {isAnnual ? 'per month, billed $276/yr' : 'per month'}
            </div>
            <div className="pc-savings">
              {isAnnual ? 'Save $116/year vs monthly' : '\u00A0'}
            </div>
            <ul className="pc-features">
              <li><span className="pcf-check">✓</span><span className="pcf-text">Everything in Starter</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Bank sync via Plaid</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">AI Coach (unlimited)</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Multi-currency support</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Full spending analytics</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">12-month history</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Priority support</span></li>
            </ul>
            <button className="pc-btn solid">Start 14-Day Free Trial</button>
            <p style={{fontSize: '11px', color: 'var(--cream-dim)', textAlign: 'center', marginTop: '10px'}}>
              No credit card required
            </p>
          </div>

          {/* Enterprise */}
          <div className="price-card">
            <div className="pc-plan">Enterprise</div>
            <div className="pc-price" style={{fontSize: '22px', marginTop: '6px'}}>Custom</div>
            <div className="pc-period">contact us</div>
            <div className="pc-savings">&nbsp;</div>
            <ul className="pc-features">
              <li><span className="pcf-check">✓</span><span className="pcf-text">Everything in Pro</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">API access</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Team collaboration</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">SSO / SAML</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Dedicated CSM</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Custom integrations</span></li>
              <li><span className="pcf-check">✓</span><span className="pcf-text">Advanced reporting</span></li>
            </ul>
            <button className="pc-btn ghost">Contact Sales</button>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-wrap">
          <div className="faq-title">Frequently asked</div>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggleFaq(index)}>
                {faq.question} <span className="faq-arrow">▾</span>
              </button>
              <div className="faq-a">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}