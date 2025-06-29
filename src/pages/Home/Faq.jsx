import React from 'react';

const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, it's designed to fit various age groups and body types comfortably with adjustable straps.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Many users report reduced back pain and improved posture with consistent use over time.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Yes, some models include smart features like posture vibration alerts for real-time correction.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You can sign up for email notifications on our website to be alerted when the product is restocked.",
  },
];

const Faq = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-12">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Question (FAQ)</h2>
      <p className="text-center text-gray-500 mb-8">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce
        pain, and strengthen your body with ease!
      </p>

      <div className="space-y-4">
        {faqData.map((faq, idx) => (
          <div
            key={idx}
            className={`collapse collapse-arrow bg-white border border-gray-400 `}
          >
            <input type="checkbox" />
            <div className="collapse-title text-lg font-semibold">
              {faq.question}
            </div>
            <div className="collapse-content text-gray-600 text-sm">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
