import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="py-20 md:py-28 bg-gradient-gold relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-deep rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-deep rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep mb-6">
            Join Believers Across Nations
          </h2>
          <p className="text-lg md:text-xl text-navy-deep/80 mb-10 leading-relaxed">
            Stand in the gap for revival. Your prayers matter. Together, we can 
            see God move mightily across the nations as we unite in fervent intercession.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="navy" size="xl" asChild>
              <Link to="/prayer-requests">Submit Prayer Request</Link>
            </Button>
            <Button
              size="xl"
              className="bg-transparent border-2 border-navy-deep text-navy-deep hover:bg-navy-deep hover:text-primary-foreground"
              asChild
            >
              <Link to="/missions-giving">Partner With Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
