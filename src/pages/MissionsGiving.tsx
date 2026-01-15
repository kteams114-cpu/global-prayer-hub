import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gift, Globe, Heart, Users, BookOpen, ArrowRight, Calendar } from "lucide-react";

const missionNews = [
  {
    id: 1,
    date: "January 10, 2026",
    title: "Prayer Initiative Launched in Southeast Asia",
    excerpt:
      "A new regional prayer initiative has been launched, connecting intercessors across 10 nations in Southeast Asia for strategic prayer covering.",
    image: "🌏",
  },
  {
    id: 2,
    date: "January 5, 2026",
    title: "Global Day of Prayer - Record Participation",
    excerpt:
      "Our annual Global Day of Prayer saw participation from over 150 countries, with believers uniting for 24 hours of non-stop intercession.",
    image: "🙏",
  },
  {
    id: 3,
    date: "December 28, 2025",
    title: "New Partnership with Mission Organizations",
    excerpt:
      "We are excited to announce new partnerships with three mission organizations to expand prayer covering for unreached people groups.",
    image: "🤝",
  },
];

const givingImpact = [
  {
    icon: Globe,
    title: "Support Global Prayer Initiatives",
    description: "Fund prayer gatherings and events across nations",
  },
  {
    icon: Users,
    title: "Equip Intercessors",
    description: "Provide training and resources for prayer warriors",
  },
  {
    icon: Heart,
    title: "Fund Outreach & Mission Efforts",
    description: "Support evangelism in unreached communities",
  },
  {
    icon: BookOpen,
    title: "Maintain & Expand the Network",
    description: "Keep this platform running and growing",
  },
];

const MissionsGiving = () => {
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
              Missions & Giving
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Stay informed about what God is doing through the Global Network of 
              Intercessors around the world, and partner with us through giving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission News */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mission News
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Updates on prayer initiatives, regional movements, and mission partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionNews.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="h-48 bg-muted flex items-center justify-center text-6xl">
                  {news.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {news.date}
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {news.excerpt}
                  </p>
                  <button className="text-gold hover:text-gold-dark text-sm font-medium flex items-center gap-1">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Section */}
      <section id="give" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Gift className="w-7 h-7 text-navy-deep" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Partner With Us
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Your generous giving enables us to expand prayer coverage across 
                nations, equip intercessors, and support mission initiatives that 
                are advancing God's kingdom.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Every gift, no matter the size, makes a difference. Together, we 
                are seeing God move in unprecedented ways through united prayer.
              </p>

              <div className="bg-card rounded-xl p-6 border border-border mb-8">
                <p className="font-serif text-lg italic text-foreground mb-2">
                  "Each of you should give what you have decided in your heart to give, 
                  not reluctantly or under compulsion, for God loves a cheerful giver."
                </p>
                <p className="text-sm text-muted-foreground">— 2 Corinthians 9:7</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="gold" size="xl">
                  Give One-Time Gift
                </Button>
                <Button variant="outline" size="xl">
                  Become Monthly Partner
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                  Your Gift Supports
                </h3>
                <div className="space-y-6">
                  {givingImpact.map((item, index) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-navy-deep text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Stewardship & Transparency
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              We are committed to faithful stewardship of every gift entrusted to us. 
              All donations are used to advance our mission of uniting believers in 
              prayer for global revival. We maintain transparency and accountability 
              in all financial matters.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-gold mb-2">150+</p>
                <p className="text-primary-foreground/60 text-sm">Countries Reached</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gold mb-2">10K+</p>
                <p className="text-primary-foreground/60 text-sm">Active Intercessors</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gold mb-2">5K+</p>
                <p className="text-primary-foreground/60 text-sm">Prayers Answered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MissionsGiving;
