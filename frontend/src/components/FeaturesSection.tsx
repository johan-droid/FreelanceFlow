'use client';

import { useState, useEffect, useRef } from 'react';

export default function FeaturesSection() {
  const [historyMonths, setHistoryMonths] = useState(12);
  const [monthlyIncome, setMonthlyIncome] = useState(5200);
  const [activeCountry, setActiveCountry] = useState('us');
  const [isAnnual, setIsAnnual] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'user', text: 'Can I afford a $2,000 laptop if my main project ends next month?' },
    { 
      type: 'bot', 
      html: `Based on your data:<br>
      · Safe monthly spend: <strong>$2,269</strong><br>
      · Cash position: <strong>$8,500</strong> (3.7 months runway)<br>
      · Forecast (next month): <span class="warn">$3,200 — lower season</span><br><br>
      <span class="ok">✓ You can afford it.</span> It's ~88% of one month's budget. However — given the forecast dip, consider waiting 2–3 weeks or using 0% financing to preserve emergency buffer.<br><br>
      Confidence: <strong>HIGH</strong> (14 months of data)`
    }
  ]);

  const timelineRef = useRef<HTMLDivElement>(null);

  const taxData = {
    us: { federal: '$4,200', se: '$7,065', state: '$1,200', total: '$12,465', quarterly: '$3,116', bars: [80, 100, 30] },
    uk: { federal: '£6,800', se: '£3,400', state: '£0', total: '£10,200', quarterly: '£2,550 (payments on account)', bars: [100, 50, 0] },
    au: { federal: 'A$8,200', se: 'A$1,800', state: 'A$0', total: 'A$10,000', quarterly: 'A$2,500 (BAS quarters)', bars: [100, 22, 0] }
  };

  const taxLabels = { 
    us: ['Federal income tax','Self-employment tax','State tax (est.)'], 
    uk: ['Income tax','NI Contributions','N/A'], 
    au: ['Income tax','Medicare levy','GST (if applicable)'] 
  };

  const chatReplies = [
    "Based on your 12-month data, your average monthly income is $5,200. After tax reserves and volatility buffer, your safe monthly spend is <strong>$2,269</strong>.",
    "Your Q3 average is historically 22% lower than Q2. I'd recommend boosting your cash reserve by <strong>$600</strong> this month to cushion the dip.",
    "You have <strong>3.7 months</strong> of runway in your current cash position. That's solid — most financial advisors recommend 3-6 months for freelancers.",
    "Your next quarterly tax payment is June 15 — <strong>$3,116</strong>. You currently have $6,200 reserved, so you're covered with $3,084 to spare."
  ];

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

    if (timelineRef.current) {
      const steps = timelineRef.current.querySelectorAll('.tl-step');
      steps.forEach(step => observer.observe(step));
    }

    return () => observer.disconnect();
  }, []);

  const updateCalculator = (months: number, income: number) => {
    const tax = Math.round(income * 0.25);
    const volatilityFactor = months >= 12 ? 0.12 : months >= 6 ? 0.18 : 0.24;
    const buffer = Math.round((income - tax) * volatilityFactor);
    const result = income - tax - buffer;
    return { tax, buffer, result, months, income };
  };

  const calc = updateCalculator(historyMonths, monthlyIncome);
  const confidence = historyMonths >= 12 ? '● HIGH confidence' : historyMonths >= 6 ? '◑ MEDIUM confidence' : '○ LOW confidence';
  const confColor = historyMonths >= 12 ? 'var(--green)' : historyMonths >= 6 ? 'var(--amber)' : 'var(--red)';

  const switchCountry = (country: string) => {
    setActiveCountry(country);
  };

  const sendChat = () => {
    if (!chatInput.trim()) return;
    
    const newUserMessage = { type: 'user', text: chatInput };
    setChatMessages(prev => [...prev, newUserMessage]);
    setChatInput('');
    
    setTimeout(() => {
      const replyIndex = Math.floor(Math.random() * chatReplies.length);
      const botMessage = { type: 'bot', html: chatReplies[replyIndex] };
      setChatMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendChat();
    }
  };

  return (
    <section id="features">
      <div className="section-inner">
        <span className="section-label">How FreelanceFlow works</span>
        <h2 className="section-h2">Four tools. One <em>financial foundation.</em></h2>

        {/* Feature 1 */}
        <div className="feature-block" style={{marginTop: '52px'}}>
          <div className="feat-text">
            <div className="feat-label">01 — Safe-to-spend engine</div>
            <h3 className="feat-h3">Your personal spending number, recalculated monthly</h3>
            <p className="feat-desc">No more guessing whether you can afford something. FreelanceFlow runs a volatility-adjusted calculation across your income history to give you a single, reliable monthly budget.</p>
            <ul className="feat-bullets">
              <li>Based on your actual income patterns — not averages</li>
              <li>Accounts automatically for slow months and tax reserves</li>
              <li>Confidence score: high / medium / low based on data depth</li>
              <li>Adjusts in real-time when new income arrives</li>
            </ul>
          </div>
          <div className="feat-demo">
            <div className="fd-title">Try the Calculator</div>
            <div className="calc-slider-wrap">
              <div className="calc-label">
                <span>Income history window</span>
                <span>{historyMonths} months</span>
              </div>
              <input 
                type="range" 
                min="3" 
                max="24" 
                value={historyMonths} 
                onChange={(e) => setHistoryMonths(parseInt(e.target.value))}
                style={{
                  background: `linear-gradient(to right, var(--gold) ${((historyMonths-3)/21)*100}%, rgba(255,255,255,0.1) ${((historyMonths-3)/21)*100}%)`
                }}
              />
            </div>
            <div className="calc-slider-wrap" style={{marginBottom: '20px'}}>
              <div className="calc-label">
                <span>Average monthly income</span>
                <span>${monthlyIncome.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="2000" 
                max="15000" 
                step="200" 
                value={monthlyIncome} 
                onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
                style={{
                  background: `linear-gradient(to right, var(--gold) ${((monthlyIncome-2000)/13000)*100}%, rgba(255,255,255,0.1) ${((monthlyIncome-2000)/13000)*100}%)`
                }}
              />
            </div>
            <div className="calc-result">
              <div className="cr-row"><span className="cr-label">Avg. monthly gross</span><span className="cr-val">${calc.income.toLocaleString()}</span></div>
              <div className="cr-row"><span className="cr-label">Tax reserve (25%)</span><span className="cr-val red">−${calc.tax.toLocaleString()}</span></div>
              <div className="cr-row"><span className="cr-label">Volatility buffer</span><span className="cr-val red">−${calc.buffer.toLocaleString()}</span></div>
              <div className="cr-row total"><span className="cr-label" style={{fontWeight: '600', color: 'var(--cream)'}}>Safe monthly spend</span><span className="cr-val green">${calc.result.toLocaleString()}</span></div>
            </div>
            <div 
              className="confidence-badge" 
              style={{
                color: confColor,
                borderColor: confColor + '55',
                background: confColor + '11'
              }}
            >
              {confidence} — {historyMonths}+ months
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature-block reverse">
          <div className="feat-text">
            <div className="feat-label">02 — Automated tax planning</div>
            <h3 className="feat-h3">Know your tax bill before the IRS does</h3>
            <p className="feat-desc">Multi-country tax engines with progressive bracket support. FreelanceFlow sets aside the exact right amount from every payment and reminds you before every quarterly deadline.</p>
            <ul className="feat-bullets">
              <li>US, UK, and Australia (more coming)</li>
              <li>Progressive brackets, self-employment tax, state estimates</li>
              <li>Quarterly due-date calendar with push alerts</li>
              <li>Reconcile estimates vs. actual after filing</li>
            </ul>
          </div>
          <div className="feat-demo">
            <div className="fd-title">Tax Estimator</div>
            <div className="tax-country-tabs">
              {Object.keys(taxData).map((country) => (
                <button 
                  key={country}
                  className={`tab ${activeCountry === country ? 'active' : ''}`}
                  onClick={() => switchCountry(country)}
                >
                  {country === 'us' ? '🇺🇸 US' : country === 'uk' ? '🇬🇧 UK' : '🇦🇺 AU'}
                </button>
              ))}
            </div>
            <div id="taxBreakdown">
              <div className="tax-row">
                <span className="tr-label">{taxLabels[activeCountry as keyof typeof taxLabels][0]}</span>
                <span className="tr-val">{taxData[activeCountry as keyof typeof taxData].federal}</span>
              </div>
              <div className="tax-row">
                <span className="tr-label">{taxLabels[activeCountry as keyof typeof taxLabels][1]}</span>
                <span className="tr-val">{taxData[activeCountry as keyof typeof taxData].se}</span>
              </div>
              <div className="tax-row">
                <span className="tr-label">{taxLabels[activeCountry as keyof typeof taxLabels][2]}</span>
                <span className="tr-val">{taxData[activeCountry as keyof typeof taxData].state}</span>
              </div>
            </div>
            <div className="tax-total-row" style={{marginTop: '10px'}}>
              <span className="ttr-label">Annual total</span>
              <span className="ttr-val">{taxData[activeCountry as keyof typeof taxData].total}</span>
            </div>
            <div style={{marginTop: '8px', fontSize: '11px', color: 'var(--cream-dim)'}}>
              Quarterly: <span style={{color: 'var(--gold)', fontFamily: 'var(--mono)'}}>{taxData[activeCountry as keyof typeof taxData].quarterly}</span> due Apr 15 · Jun 15 · Sep 15 · Jan 15
            </div>
            <div className="tax-bar-chart" style={{marginTop: '18px', paddingBottom: '20px'}}>
              <div className="tax-bar-seg federal" style={{height: `${taxData[activeCountry as keyof typeof taxData].bars[0]}%`}}>
                <span className="tbs-label">Federal</span>
              </div>
              <div className="tax-bar-seg se" style={{height: `${taxData[activeCountry as keyof typeof taxData].bars[1]}%`}}>
                <span className="tbs-label">SE Tax</span>
              </div>
              <div className="tax-bar-seg state" style={{height: `${taxData[activeCountry as keyof typeof taxData].bars[2]}%`}}>
                <span className="tbs-label">State</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature-block">
          <div className="feat-text">
            <div className="feat-label">03 — Bank sync & reconciliation</div>
            <h3 className="feat-h3">Invoice sent. Payment received. Matched automatically.</h3>
            <p className="feat-desc">Connect your bank via Plaid and watch invoices reconcile themselves. Every payment triggers a tax reserve, updates your safe-to-spend, and closes the loop on your cash flow.</p>
            <ul className="feat-bullets">
              <li>Powered by Plaid — read-only bank access</li>
              <li>AI matching with 99.2% accuracy</li>
              <li>Instant tax reserve on every deposit</li>
              <li>Invoice-to-cash timeline visible at a glance</li>
            </ul>
          </div>
          <div className="feat-demo">
            <div className="fd-title">Invoice → Payment Flow</div>
            <div className="timeline" ref={timelineRef}>
              <div className="tl-step" data-delay="0">
                <div className="tl-line-wrap">
                  <div className="tl-dot pending">📧</div>
                  <div className="tl-connector"></div>
                </div>
                <div className="tl-card">
                  <div className="tlc-title">Invoice Created</div>
                  <div className="tlc-row"><span className="tlc-key">Invoice</span><span className="tlc-val">#2024-047</span></div>
                  <div className="tlc-row"><span className="tlc-key">Client</span><span className="tlc-val">Acme Studio</span></div>
                  <div className="tlc-row"><span className="tlc-key">Amount</span><span className="tlc-val">$5,000</span></div>
                  <span className="tl-badge badge-pending">PENDING</span>
                </div>
              </div>
              <div className="tl-step" data-delay="200">
                <div className="tl-line-wrap">
                  <div className="tl-dot matched">🏦</div>
                  <div className="tl-connector"></div>
                </div>
                <div className="tl-card">
                  <div className="tlc-title">Bank Deposit Detected</div>
                  <div className="tlc-row"><span className="tlc-key">Amount</span><span className="tlc-val">+$5,000</span></div>
                  <div className="tlc-row"><span className="tlc-key">From</span><span className="tlc-val">Acme Studio LLC</span></div>
                  <div className="tlc-row"><span className="tlc-key">Match</span><span className="tlc-val" style={{color: 'var(--green)'}}>100% confident</span></div>
                  <span className="tl-badge badge-matched">MATCHED ✓</span>
                </div>
              </div>
              <div className="tl-step" data-delay="400">
                <div className="tl-line-wrap">
                  <div className="tl-dot paid">✅</div>
                </div>
                <div className="tl-card">
                  <div className="tlc-title">Payment Recorded</div>
                  <div className="tlc-row"><span className="tlc-key">Tax reserved</span><span className="tlc-val" style={{color: 'var(--amber)'}}>$1,250 (25%)</span></div>
                  <div className="tlc-row"><span className="tlc-key">Net available</span><span className="tlc-val" style={{color: 'var(--green)'}}>$3,750</span></div>
                  <div className="tlc-row"><span className="tlc-key">Safe-to-spend ↑</span><span className="tlc-val" style={{color: 'var(--gold)'}}>$2,420</span></div>
                  <span className="tl-badge badge-paid">PAID ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="feature-block reverse">
          <div className="feat-text">
            <div className="feat-label">04 — AI financial coach</div>
            <h3 className="feat-h3">Your personal CFO, available 24/7</h3>
            <p className="feat-desc">Ask any money question and get answers grounded in your actual numbers — not generic advice. The Coach knows your income history, tax reserves, and upcoming obligations.</p>
            <ul className="feat-bullets">
              <li>Contextual answers from your real financial data</li>
              <li>Scenario modeling: &quot;can I afford X?&quot;</li>
              <li>Proactive alerts before cash crunches</li>
              <li>Powered by Claude — thoughtful, not gimmicky</li>
            </ul>
          </div>
          <div className="feat-demo" style={{padding: '0'}}>
            <div className="chat-wrap">
              <div className="chat-header">
                <div className="chat-avatar">🤖</div>
                <div>
                  <div className="chat-name">FreelanceFlow Coach</div>
                  <div className="chat-status">● Online — knows your numbers</div>
                </div>
              </div>
              <div className="chat-msgs">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`msg ${msg.type}`}>
                    {msg.html ? (
                      <div 
                        className="msg-bubble"
                        dangerouslySetInnerHTML={{ __html: msg.html }}
                      />
                    ) : (
                      <div className="msg-bubble">
                        {msg.text}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="chat-input-row">
                <input 
                  className="chat-input" 
                  type="text" 
                  placeholder="Ask anything about your finances..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button className="chat-send" onClick={sendChat}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}