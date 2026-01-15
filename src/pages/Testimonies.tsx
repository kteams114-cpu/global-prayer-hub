import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Quote, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "OTHER", name: "Other", flag: "🌍" },
];

const testimonies = [
  {
    id: 1,
    country: "Nigeria",
    flag: "🇳🇬",
    name: "Grace O.",
    testimony:
      "I submitted a prayer request for healing, and within weeks, God restored my health completely. I was diagnosed with a serious condition, but after the network prayed, my next test results came back clear. Thank you to everyone who prayed. Our God is faithful!",
  },
  {
    id: 2,
    country: "Philippines",
    flag: "🇵🇭",
    name: "Maria S.",
    testimony:
      "My family was broken for over 10 years due to misunderstandings and hurt. I submitted a prayer request for reconciliation, and through the prayers of this network, we have been reconciled. God truly hears the prayers of His people! We are now walking together in unity.",
  },
  {
    id: 3,
    country: "Brazil",
    flag: "🇧🇷",
    name: "Carlos R.",
    testimony:
      "I was struggling financially and facing unemployment for 8 months. I submitted a prayer request, and within a month, God opened doors I never expected. I now have a job that provides more than I could have asked for. He is Jehovah Jireh!",
  },
  {
    id: 4,
    country: "United States",
    flag: "🇺🇸",
    name: "Jennifer M.",
    testimony:
      "My son was far from God for 15 years. He had walked away from faith and was living in rebellion. After submitting his name for prayer, he returned to faith within three months. He is now serving in our local church. Never stop praying for your prodigals!",
  },
  {
    id: 5,
    country: "Kenya",
    flag: "🇰🇪",
    name: "Daniel K.",
    testimony:
      "I asked for prayers regarding my business which was failing. God not only saved my business but expanded it beyond what I imagined. I'm now able to employ others and give back to my community. God is good!",
  },
  {
    id: 6,
    country: "India",
    flag: "🇮🇳",
    name: "Priya R.",
    testimony:
      "After years of trying to conceive, we asked for prayer. God blessed us with twins! We had lost all hope, but God reminded us that He specializes in impossibilities. To Him be all the glory!",
  },
];

const Testimonies = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    testimony: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedTestimony, setExpandedTestimony] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.country || !formData.testimony) {
      toast({
        title: "Please fill in required fields",
        description: "Country and testimony are required.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Testimony Submitted",
      description: "Thank you for sharing God's faithfulness!",
    });
    setFormData({ name: "", country: "", testimony: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

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
              Testimonies of God's Faithfulness
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We celebrate answered prayers and testimonies that glorify God 
              and encourage faith around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonies Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonies.map((testimony, index) => (
              <motion.div
                key={testimony.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Quote className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{testimony.flag}</span>
                      <span className="font-semibold text-foreground">
                        {testimony.name}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimony.country}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {expandedTestimony === testimony.id
                    ? testimony.testimony
                    : `${testimony.testimony.slice(0, 150)}...`}
                </p>

                <button
                  onClick={() =>
                    setExpandedTestimony(
                      expandedTestimony === testimony.id ? null : testimony.id
                    )
                  }
                  className="mt-4 text-gold hover:text-gold-dark text-sm font-medium"
                >
                  {expandedTestimony === testimony.id ? "Read Less" : "Read More"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Testimony Form */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Sparkles className="w-7 h-7 text-navy-deep" />
                </div>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Share Your Testimony
              </h2>
              <p className="text-muted-foreground">
                If God has answered your prayer, we invite you to share your testimony 
                to encourage others and glorify His name.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name (Optional)</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      setFormData({ ...formData, country: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          <span className="flex items-center gap-2">
                            <span>{country.flag}</span>
                            <span>{country.name}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="testimony">Your Testimony *</Label>
                <Textarea
                  id="testimony"
                  placeholder="Share how God answered your prayer..."
                  rows={6}
                  value={formData.testimony}
                  onChange={(e) =>
                    setFormData({ ...formData, testimony: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={submitted}
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Testimony Submitted!
                  </span>
                ) : (
                  "Submit Testimony"
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonies;
