import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Connecting passionate people for fervent intercession for global revival of righteousness, dominion, and preparation of the Church.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A revived global Church walking in holiness, authority, and love—prepared for the return of Jesus Christ.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Prayer, Unity, Holiness, Obedience, and Faith—the foundations upon which we stand together as intercessors.",
  },
];

export function WhoWeArePreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Who We Are
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A worldwide movement of believers committed to fervent, strategic, 
            and Spirit-led prayer for nations and the global Church.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                <feature.icon className="w-7 h-7 text-navy-deep" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link to="/who-we-are">Learn More About Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
