// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown } from "lucide-react";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqs: FAQItem[] = [
//   {
//     question: "What is your return policy?",
//     answer:
//       "You can return any unused item within 7 days of delivery. The product must be in its original condition with tags.",
//   },
//   {
//     question: "Do you offer cash on delivery?",
//     answer:
//       "Yes, we offer COD across most major cities. Additional COD charges may apply based on your location.",
//   },
//   {
//     question: "How long does delivery take?",
//     answer:
//       "Orders are usually delivered within 3–7 business days depending on your city and state.",
//   },
//   {
//     question: "Are your products original?",
//     answer:
//       "Yes, all products sold on our store are 100% authentic and pass quality checks before dispatch.",
//   },
//   {
//     question: "How can I track my order?",
//     answer:
//       "Once your order is shipped, you will receive an SMS and email with the tracking details.",
//   },
// ];

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center text-gray-800 mb-12"
//         >
//           Frequently Asked Questions
//         </motion.h2>

//         {/* Accordion */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="bg-white border rounded-xl shadow-sm px-6 py-4 cursor-pointer"
//               onClick={() => toggleFAQ(index)}
//             >
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {faq.question}
//                 </h3>

//                 <motion.div
//                   animate={{ rotate: openIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <ChevronDown className="w-6 h-6 text-gray-600" />
//                 </motion.div>
//               </div>

//               {/* Answer */}
//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.p
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     transition={{ duration: 0.4 }}
//                     className="text-gray-600 mt-3 overflow-hidden"
//                   >
//                     {faq.answer}
//                   </motion.p>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;






import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Where is Super Family Mart located?",
    answer:
      "Super Family Mart is centrally located and easy to access. Our store address and location map are available in the Contact or Visit Us section.",
  },

  {
    question: "Do you offer trial rooms for customers?",
    answer:
      "Yes! We have spacious and well-maintained trial rooms to help you try out outfits comfortably before purchasing.",
  },
  {
    question: "Is there parking available at the store?",
    answer:
      "Yes, we provide dedicated parking space for both two-wheelers and four-wheelers for a hassle-free shopping experience.",
  },
  {
    question: "Do you have clothing for all age groups?",
    answer:
      "Absolutely! We offer premium collections for men, women, kids, and infants — all under one roof.",
  },
  {
    question: "Are there ongoing offers or discounts?",
    answer:
      "We frequently run seasonal sales, festival offers, and special in-store promotions. Visit the store or follow our social pages for updates.",
  },
  {
    question: "Is there assistance available for styling?",
    answer:
      "Our staff will be happy to help you choose styles, sizes, and combinations that suit your look.",
  },
  {
    question: "Do you have plus-size collections?",
    answer:
      "Yes, we offer a wide range of sizes across men's and women's wear, including plus-size options.",
  },
];


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4"
        >
          Frequently Asked Questions
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Find quick answers to some of the most common queries about our
          services, process, and support.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow px-6 py-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-600 mt-3 overflow-hidden leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
