import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScriptureBanner } from "@/components/sections/ScriptureBanner";
import { WhoWeArePreview } from "@/components/sections/WhoWeArePreview";
import { TodaysPrayer } from "@/components/sections/TodaysPrayer";
import { TestimonySlider } from "@/components/sections/TestimonySlider";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { CallToAction } from "@/components/sections/CallToAction";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <ScriptureBanner
        verse="If My people, who are called by My name, will humble themselves and pray and seek My face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land."
        reference="2 Chronicles 7:14"
      />
      
      <WhoWeArePreview />
      
      {/* Welcome Section */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              Welcome to Our Global Prayer Family
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              The Global Network of Intercessors is a worldwide movement of believers 
              committed to fervent, strategic, and Spirit-led prayer. We believe prayer 
              is the foundation for revival, righteousness, and the preparation of the 
              Church for the return of Jesus Christ. We unite individuals, churches, and 
              ministries across nations to stand in the gap for families, cities, nations, 
              and the global Church.
            </p>
          </motion.div>
        </div>
      </section>
      
      <TodaysPrayer />
      
      <WhatWeDo />
      
      <TestimonySlider />
      
      <CallToAction />
    </Layout>
  );
};

export default Index;
