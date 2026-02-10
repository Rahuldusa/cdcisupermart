import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// import promiseImg from "@/assets/fashion-promise.jpg"; // 👈 replace with your actual image path

export default function OurPromiseSection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <Star className="h-12 w-12 text-accent mb-6 mx-auto md:mx-0" />
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Our Promise
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            At <span className="font-semibold text-foreground">Super Family Mart</span>, 
            we believe fashion is for everyone. We curate premium collections that bring 
            style, comfort, and confidence to every member of your family. 
            From timeless classics to contemporary trends, we’re your one-stop 
            destination for all things fashion.
          </p>
         
          <Button 
  size="lg" 
  variant="outline" 
  className="group"
  onClick={() => window.location.href = "/about"}
>
  Learn More About Us
  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://i.pinimg.com/736x/b4/f0/5f/b4f05fd501e511280dafda8bf2e6522f.jpg"
              alt="Fashion Promise"
              className="w-full h-[450px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Decorative overlay */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}




