import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MapPin } from "lucide-react";

const testimonies = [
  {
    id: 1,
    country: "Nigeria",
    flag: "🇳🇬",
    testimony:
      "I submitted a prayer request for healing, and within weeks, God restored my health completely. Thank you to everyone who prayed. Our God is faithful!",
    name: "Grace O.",
  },
  {
    id: 2,
    country: "Philippines",
    flag: "🇵🇭",
    testimony:
      "My family was broken, but through the prayers of this network, we have been reconciled. God truly hears the prayers of His people!",
    name: "Maria S.",
  },
  {
    id: 3,
    country: "Brazil",
    flag: "🇧🇷",
    testimony:
      "I was struggling financially and submitted a prayer request. Within a month, God opened doors I never expected. He is Jehovah Jireh!",
    name: "Carlos R.",
  },
  {
    id: 4,
    country: "United States",
    flag: "🇺🇸",
    testimony:
      "My son was far from God for 15 years. After submitting his name for prayer, he returned to faith. Never stop praying!",
    name: "Jennifer M.",
  },
];

export function TestimonySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonies.length) % testimonies.length);
  };

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonies of God's Faithfulness
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how God is answering prayers around the world through this network of intercessors.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border">
            <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-gold" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="pt-16 md:pt-12"
              >
                <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonies[currentIndex].testimony}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{testimonies[currentIndex].flag}</span>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonies[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {testimonies[currentIndex].country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-gold/20 flex items-center justify-center transition-colors"
                      aria-label="Previous testimony"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-muted hover:bg-gold/20 flex items-center justify-center transition-colors"
                      aria-label="Next testimony"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gold"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimony ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/testimonies">Read All Testimonies</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
