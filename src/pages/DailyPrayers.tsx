import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, BookOpen, Filter, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const prayerPosts = [
  {
    id: 1,
    date: "January 15, 2026",
    title: "Revival in the Church",
    scripture: "Joel 2:28",
    category: "Revival",
    prayerPoints: [
      "Pray for renewed hunger for God in the Church worldwide",
      "Ask for repentance and restoration among believers",
      "Declare a fresh outpouring of the Holy Spirit upon all nations",
      "Intercede for pastors and spiritual leaders to walk in holiness",
    ],
    closingPrayer:
      "Lord, revive Your Church. Restore first love and awaken hearts for Your glory. May Your Spirit move powerfully across the nations.",
  },
  {
    id: 2,
    date: "January 14, 2026",
    title: "Prayer for World Leaders",
    scripture: "1 Timothy 2:1-2",
    category: "Nations",
    prayerPoints: [
      "Pray for wisdom and righteousness for heads of state",
      "Ask God to raise up godly leaders in every nation",
      "Intercede for peace and justice in governance",
      "Pray against corruption and for transparency in government",
    ],
    closingPrayer:
      "Father, we lift up the leaders of nations before You. Grant them wisdom, guide their decisions, and turn their hearts toward righteousness.",
  },
  {
    id: 3,
    date: "January 13, 2026",
    title: "The Persecuted Church",
    scripture: "Hebrews 13:3",
    category: "Church",
    prayerPoints: [
      "Pray for strength and courage for believers facing persecution",
      "Ask God to protect and provide for persecuted families",
      "Intercede for the release of imprisoned Christians",
      "Pray for the gospel to advance even through persecution",
    ],
    closingPrayer:
      "Lord, strengthen Your children who suffer for Your name. Be their refuge and fortress. May their faith remain unshakeable.",
  },
  {
    id: 4,
    date: "January 12, 2026",
    title: "Youth and Next Generation",
    scripture: "Psalm 78:4",
    category: "Revival",
    prayerPoints: [
      "Pray for a generation that will not compromise their faith",
      "Ask God to raise up young evangelists and leaders",
      "Intercede against the spirit of deception targeting youth",
      "Pray for revival fires to spread through schools and universities",
    ],
    closingPrayer:
      "Father, capture the hearts of this generation. May they be on fire for You, unashamed of the gospel, and bold in their witness.",
  },
  {
    id: 5,
    date: "January 11, 2026",
    title: "Unreached People Groups",
    scripture: "Matthew 24:14",
    category: "Nations",
    prayerPoints: [
      "Pray for the gospel to reach every tribe, tongue, and nation",
      "Ask God to send laborers into unreached fields",
      "Intercede for breakthroughs in closed nations",
      "Pray for translations of Scripture in every language",
    ],
    closingPrayer:
      "Lord of the harvest, send forth laborers. Open doors that no one can shut. Let Your Word run swiftly to the ends of the earth.",
  },
];

const categories = ["All", "Revival", "Nations", "Church", "Leaders"];

const DailyPrayers = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPrayer, setExpandedPrayer] = useState<number | null>(1);

  const filteredPrayers =
    selectedCategory === "All"
      ? prayerPosts
      : prayerPosts.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Daily Global Prayers
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              United in prayer every day across the nations. Return daily and 
              pray with believers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "gold" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Feed */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredPrayers.map((prayer, index) => (
              <motion.div
                key={prayer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setExpandedPrayer(expandedPrayer === prayer.id ? null : prayer.id)
                  }
                  className="w-full px-6 py-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                      <Calendar className="w-5 h-5 text-navy-deep" />
                    </div>
                    <div className="text-left">
                      <span className="text-sm text-muted-foreground">
                        {prayer.date}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {prayer.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gold flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {prayer.scripture}
                        </span>
                        <span className="px-2 py-0.5 bg-muted rounded-full text-xs text-muted-foreground">
                          {prayer.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedPrayer === prayer.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Content */}
                {expandedPrayer === prayer.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 border-t border-border"
                  >
                    <div className="pt-6">
                      <h4 className="font-semibold text-foreground mb-4">
                        Prayer Points
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {prayer.prayerPoints.map((point, i) => (
                          <li key={i} className="flex gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-semibold">
                              {i + 1}
                            </span>
                            <span className="text-muted-foreground">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-muted rounded-xl p-4">
                        <p className="italic text-muted-foreground">
                          "{prayer.closingPrayer}"
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Reminder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mt-16 p-8 bg-muted rounded-2xl"
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              Join Us Daily
            </h3>
            <p className="text-muted-foreground">
              Return daily and pray with believers worldwide. Together, our prayers 
              rise before God's throne as a sweet fragrance.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default DailyPrayers;
