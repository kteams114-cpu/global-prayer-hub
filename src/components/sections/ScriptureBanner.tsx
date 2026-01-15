import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

interface ScriptureBannerProps {
  verse: string;
  reference: string;
}

export function ScriptureBanner({ verse, reference }: ScriptureBannerProps) {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-6">
            <BookOpen className="w-6 h-6 text-gold" />
          </div>
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-4 italic">
            "{verse}"
          </blockquote>
          <cite className="text-muted-foreground font-medium not-italic">
            — {reference}
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
