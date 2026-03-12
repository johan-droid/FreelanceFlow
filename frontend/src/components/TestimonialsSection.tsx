'use client';

import { useEffect, useRef } from 'react';

export default function TestimonialsSection() {
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
      const cards = sectionRef.current.querySelectorAll('.testi-card');
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef}>
      <div className="section-inner" style={{paddingBottom: '80px'}}>
        <div className="divider-line"></div>
        <span className="section-label">From the community</span>
        <h2 className="section-h2">
          Freelancers who stopped <em>worrying</em><br />and started planning.
        </h2>
        <div className="testi-grid">
          <div className="testi-card" data-delay="0">
            <div className="stars">★★★★★</div>
            <p className="testi-quote">
              FreelanceFlow removed the financial anxiety I didn&apos;t even know I was carrying. I finally know how much I can safely spend every month without stressing about taxes or a slow client month.
            </p>
            <div className="testi-author">
              <div className="ta-name">Sarah M.</div>
              <div className="ta-role">Brand & UX Designer</div>
              <div className="ta-stat">$45k/yr · 2 years with FreelanceFlow</div>
            </div>
          </div>
          <div className="testi-card" data-delay="150">
            <div className="stars">★★★★★</div>
            <p className="testi-quote">
              Tax time used to give me genuine nightmares. I&apos;d owe money I hadn&apos;t set aside. Now I just check the app — the reserve is always there. It&apos;s changed how I run my business.
            </p>
            <div className="testi-author">
              <div className="ta-name">Jordan T.</div>
              <div className="ta-role">Independent Strategy Consultant</div>
              <div className="ta-stat">$120k/yr · 3 years with FreelanceFlow</div>
            </div>
          </div>
          <div className="testi-card" data-delay="300">
            <div className="stars">★★★★★</div>
            <p className="testi-quote">
              The AI Coach answered a question in 10 seconds that my accountant would have charged $200 to answer — and it cited my actual numbers. Nothing else comes close for freelancers.
            </p>
            <div className="testi-author">
              <div className="ta-name">Maya K.</div>
              <div className="ta-role">Senior Fullstack Developer</div>
              <div className="ta-stat">$95k/yr · 18 months with FreelanceFlow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}