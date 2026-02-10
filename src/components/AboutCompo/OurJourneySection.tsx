import { motion } from "framer-motion";

export default function OurJourneySection() {
  const timeline = [
    {
      year: "2010",
      title: "The Beginning",
      description:
        "Started with a small store and a big dream — to bring quality fashion to families.",
    },
    {
      year: "2015",
      title: "Expansion",
      description:
        "Opened multiple locations and expanded our collections to include ethnic and traditional wear.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Launched our online presence to serve families across the nation with ease and accessibility.",
    },
    {
      year: "Today",
      title: "Growing Together",
      description:
        "Serving thousands of families with premium fashion and embracing sustainability for a better future.",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-6 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-amber-50/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-amber-800 mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-amber-500 mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto"
          >
            A decade of growth, innovation, and serving families with love and style
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-full -translate-x-1/2"></div>
          
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} z-10`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative"
                >
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-amber-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                  
                  {/* Main Card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-amber-200 transition-all duration-500">
                    <motion.h3 
                      className="text-2xl font-bold text-amber-800 mb-3 group-hover:text-amber-700 transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300"
                    >
                      {item.description}
                    </motion.p>
                    
                    {/* Decorative Corner */}
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Center - Year Marker */}
              <div className="flex-shrink-0 w-24 h-24 mx-4 md:mx-0 relative z-20">
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative group"
                >
                  {/* Outer Ring */}
                  <div className="absolute inset-0 bg-amber-100 rounded-full opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                  
                  {/* Main Circle */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:shadow-xl transition-all duration-500">
                    <span className="font-serif text-white font-bold text-lg tracking-wide">
                      {item.year}
                    </span>
                    
                    {/* Floating Particles */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="absolute -top-1 -right-1 w-3 h-3 bg-amber-200 rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternating sides */}
              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-6 h-6 bg-amber-300 rounded-full opacity-60 hidden lg:block"
        ></motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-20 w-4 h-4 bg-amber-400 rounded-full opacity-40 hidden lg:block"
        ></motion.div>
      </div>
    </section>
  );
}