import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, BookOpen } from "lucide-react";

export function TodaysPrayer() {
  const todaysPrayer = {
    date: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    title: "Revival in the Church",
    scripture: "Joel 2:28",
    prayerPoints: [
      "Pray for renewed hunger for God in the Church worldwide",
      "Ask for repentance and restoration among believers",
      "Declare a fresh outpouring of the Holy Spirit upon all nations",
      "Intercede for pastors and spiritual leaders to walk in holiness",
    ],
  };

  return (
    <section className="py-20 md:py-28 bg-navy-deep text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <span className="text-gold font-medium">{todaysPrayer.date}</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Today's Prayer Focus
            </h2>
            <h3 className="font-serif text-2xl text-gold mb-4">
              {todaysPrayer.title}
            </h3>

            <div className="flex items-center gap-2 mb-6 text-primary-foreground/70">
              <BookOpen className="w-4 h-4" />
              <span>{todaysPrayer.scripture}</span>
            </div>

            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Join believers around the world as we lift up these prayer points 
              before the throne of grace. Let us stand together in faith.
            </p>

            <Button variant="gold" size="lg" asChild>
              <Link to="/daily-prayers">View All Daily Prayers</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-navy-medium/50 rounded-2xl p-8 border border-primary-foreground/10"
          >
            <h4 className="font-serif text-xl font-semibold mb-6 text-gold">
              Prayer Points
            </h4>
            <ul className="space-y-4">
              {todaysPrayer.prayerPoints.map((point, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-primary-foreground/80 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-primary-foreground/10">
              <p className="italic text-primary-foreground/60 text-sm">
                "Lord, revive Your Church. Restore first love and awaken hearts 
                for Your glory. May Your Spirit move powerfully across the nations."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
