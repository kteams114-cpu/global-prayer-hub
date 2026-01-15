import { motion } from "framer-motion";
import { Globe, Users, HandHeart, Sparkles, Gift } from "lucide-react";

const activities = [
  {
    icon: Globe,
    title: "Daily Global Prayer Focus",
    description: "Uniting believers worldwide in strategic, focused intercession every day.",
  },
  {
    icon: Users,
    title: "Intercession for Nations",
    description: "Praying for governments, leaders, and spiritual awakening across all nations.",
  },
  {
    icon: HandHeart,
    title: "Prayer Support",
    description: "Standing with individuals and families through their personal trials and needs.",
  },
  {
    icon: Sparkles,
    title: "Sharing Testimonies",
    description: "Celebrating and sharing stories of God's faithfulness to encourage faith.",
  },
  {
    icon: Gift,
    title: "Supporting Missions",
    description: "Partnering with mission initiatives through giving and prayer support.",
  },
];

export function WhatWeDo() {
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
            What We Do
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Through focused prayer initiatives, we believe God is moving powerfully 
            to bring revival and transformation across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-gold/30 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-muted group-hover:bg-gold/10 flex items-center justify-center mx-auto mb-4 transition-colors">
                <activity.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {activity.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
