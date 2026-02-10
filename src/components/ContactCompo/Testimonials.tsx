import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  feedback: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohit Sharma",
    role: "Fashion Enthusiast",
    feedback:
      "Amazing quality and fast delivery! The collection is very trendy and budget-friendly.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Regular Customer",
    feedback:
      "Super Family Mart has become my go-to store! Great fabric and excellent customer support.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Karthik Reddy",
    role: "Verified Buyer",
    feedback:
      "Love the comfort and style. Worth the price, totally recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

const CustomerTestimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          What Our Customers Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
            >
              {/* User Info */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 leading-relaxed">{t.feedback}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
