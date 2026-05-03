import { useState } from 'react';
import { faqs } from '../../data/faqs';
import Reveal from '../ui/Reveal';

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.07} width="100%">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left group"
        aria-expanded={open}
      >
        <div
          className="rounded-xl p-5 transition-all duration-300"
          style={{
            background: open ? 'rgba(254,104,20,0.05)' : '#002248',
            border: `1px solid ${open ? 'rgba(254,104,20,0.3)' : 'rgba(254,104,20,0.1)'}`,
          }}
        >
          {/* Question row */}
          <div className="flex items-start justify-between gap-4">
            <span
              className="font-semibold text-sm leading-relaxed"
              style={{
                fontFamily: 'Syne, sans-serif',
                color: open ? '#FE6814' : '#F0F4FF',
              }}
            >
              {faq.question}
            </span>
            <span
              className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 mt-0.5"
              style={{
                background: open ? '#FE6814' : 'rgba(254,104,20,0.1)',
                color: open ? '#010B1A' : '#FE6814',
                transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              }}
            >
              +
            </span>
          </div>

          {/* Answer */}
          <div
            className="overflow-hidden transition-all duration-400"
            style={{
              maxHeight: open ? '300px' : '0px',
              opacity: open ? 1 : 0,
            }}
          >
            <p
              className="text-sm leading-relaxed pt-4"
              style={{ color: '#6B8CAE' }}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </button>
    </Reveal>
  );
};

const FAQSection = () => {
  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section id="faq" className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 100%, rgba(254,104,20,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-10 sm:mb-16">
          <Reveal>
            <div>
              <span className="section-label block mb-3">FAQ</span>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight"
                style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
              >
                Vos questions,{' '}
                <span style={{ color: '#FE6814' }}>nos réponses</span>
              </h2>
            </div>
          </Reveal>
        </div>

        {/* 2-column accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {col1.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {col2.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i + half} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
