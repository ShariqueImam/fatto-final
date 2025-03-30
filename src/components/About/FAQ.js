import { useState } from "react";
import FAQImg1 from "../../assets/faq1.webp";
const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Shea Butter, and how is it made?",
      answer:
        "Shea butter is a natural fat extracted from the nuts of the African shea tree. It's produced by crushing, roasting, and grinding the nuts into a paste, which is then boiled to extract the butter.",
    },
    {
      question: "What are the benefits of using Shea Butter?",
      answer:
        "Shea butter deeply hydrates the skin, improves elasticity, soothes irritation, reduces inflammation, and promotes healing for dry, cracked, or damaged skin. ",
    },
    {
      question: "Is your Shea Butter 100% natural and organic?",
      answer:
        "Yes! Our shea butter is 100% pure, unrefined, and certified organic. It’s ethically sourced from sustainable farms to ensure the highest quality and environmental responsibility.",
    },
    {
      question: "Can I use Shea Butter on my face and hair?",
      answer:
        "Absolutely! Shea butter is non-comedogenic, making it safe for facial use without clogging pores. It works wonders as a natural conditioner for dry, damaged hair, reducing frizz and promoting shine.",
    },
    {
      question: "Is Shea Butter suitable for sensitive or eczema-prone skin?",
      answer:
        "Yes, shea butter is ideal for sensitive skin. Its anti-inflammatory properties make it excellent for soothing eczema, psoriasis, and other skin irritations, providing gentle and effective relief.",
    },
    {
      question: "How should I store Shea Butter?",
      answer:
        "Store shea butter in a cool, dry place away from direct sunlight to maintain its consistency and prevent melting. If it melts, simply cool it down, and it will retain its beneficial properties.",
    },
   
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-yellowDark text-white py-12 md:py-24 px-6 my-12 md:my-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-6">
          <p className="text-yellow uppercase tracking-wide font-semibold text-2xl md:text-3xl text-center md:text-left">
            « See Our FAQs »
          </p>
          <h2 className="text-3xl font-bold leading-tight text-center md:text-left">
            Our Frequently Asked Questions Here
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={FAQImg1} // Replace with your image path
              alt="Person"
              className="w-36 h-36 rounded-full"
            />
            <div className="flex items-center justify-center">
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-yellow  px-4 rounded-lg">
                8+
              </p>
              <p className="text-lg text-white ">Years Experience</p>
            </div>
          </div>
          <p className="text-white text-center md:text-left">
            Find answers to all your Shea Butter questions: Nature’s secret for
            deeply moisturized, healthy, and glowing skin every day.
          </p>
        </div>

        {/* Right Section: FAQ */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-yellow overflow-hidden">
              <button
                className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-lg md:text-xl">
                  {faq.question}
                </span>
                <span className="text-white text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-4 text-gray-200">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
