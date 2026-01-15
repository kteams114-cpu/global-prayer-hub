import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Cross, BookHeart, HandHeart, Sparkles } from "lucide-react";

const values = [
  {
    icon: HandHeart,
    title: "Prayer",
    description: "Persistent, faith-filled intercession that moves the heart of God and shifts spiritual atmospheres.",
  },
  {
    icon: Users,
    title: "Unity",
    description: "One body across cultures, denominations, and nations—united in purpose and love.",
  },
  {
    icon: Cross,
    title: "Holiness",
    description: "A call to righteous living that honors God and reflects His character to the world.",
  },
  {
    icon: BookHeart,
    title: "Obedience",
    description: "Responding faithfully to God's leading, even when the path requires sacrifice.",
  },
  {
    icon: Sparkles,
    title: "Faith",
    description: "Trusting God for global transformation, believing that He hears and answers our prayers.",
  },
];

const WhoWeAre = () => {
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
              Who We Are
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              A global family of believers united in fervent prayer for revival, 
              righteousness, and the return of Jesus Christ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <Target className="w-7 h-7 text-navy-deep" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-serif italic border-l-4 border-gold pl-6">
              "Connecting passionate people for fervent intercession for global revival 
              of righteousness, dominion, and preparation of the Church for the return 
              of Jesus Christ."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Eye className="w-7 h-7 text-navy-deep" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To see a revived global Church walking in holiness, authority, and love—
                prepared for the return of Jesus Christ and impacting nations through 
                the power of united prayer.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where believers from every nation, tongue, and tribe 
                stand together in the gap, releasing God's will on earth as it is in 
                heaven. Through strategic intercession, we believe we will see spiritual 
                awakening, societal transformation, and the preparation of the Bride of Christ.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-hero overflow-hidden flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-8xl mb-6">🌍</div>
                  <p className="font-serif text-2xl text-primary-foreground/90 italic">
                    "On earth as it is in heaven"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <Heart className="w-7 h-7 text-navy-deep" />
              </div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values are the foundation upon which we stand together as intercessors, 
              guiding our prayers and our community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 md:py-28 bg-navy-deep text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Who Can Join?
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
              Anyone with a heart for prayer—regardless of denomination, location, 
              or background—is welcome to join this global network. Whether you're a 
              seasoned intercessor or just beginning your prayer journey, there's a 
              place for you in this family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link to="/prayer-requests">Submit a Prayer Request</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/daily-prayers">Join Daily Prayer</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
