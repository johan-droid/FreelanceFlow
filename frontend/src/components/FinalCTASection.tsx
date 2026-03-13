import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section id="cta">
      <div className="cta-inner">
        <h2 className="cta-h2">
          Ready to know <em>exactly</em><br />
          where you stand?
        </h2>
        <p className="cta-sub">
          Start your free trial today. No credit card, no commitment — just clarity for your freelance finances.
        </p>
        <div className="cta-btns">
          <Link href="#" className="btn-primary" style={{fontSize: '16px', padding: '16px 32px'}}>
            Get Started Free →
          </Link>
          <Link href="#" className="btn-secondary" style={{fontSize: '16px', padding: '16px 32px'}}>
            Schedule a Demo
          </Link>
        </div>
        <div className="cta-trust">
          <span className="cta-trust-item">14-day free trial</span>
          <span className="cta-trust-item">Full Pro features</span>
          <span className="cta-trust-item">No credit card</span>
          <span className="cta-trust-item">Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}