// pages/faq.tsx
import { useEffect, useState } from 'react';

type FAQItem = { question: string; answer: string };

export default function FAQ() {
  const [faq, setFaq] = useState<FAQItem[]>([]);

  useEffect(() => {
    fetch('/legal/faq.json').then(res => res.json()).then(setFaq);
  }, []);

  return (
    <div className="p-4">
      <div dangerouslySetInnerHTML={{ __html: `<script src="https://cdn.alatreeventures.com/raffle-widget.js"></script>` }} />
      <h1 className="text-xl font-bold mb-4">FAQ</h1>
      <div className="space-y-4">
        {faq.map((item, i) => (
          <div key={i}>
            <h2 className="font-semibold">{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
