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
import { HandHeart, MapPin, Heart, Check } from "lucide-react";
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
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "OTHER", name: "Other", flag: "🌍" },
];

const prayerRequests = [
  {
    id: 1,
    country: "Nigeria",
    flag: "🇳🇬",
    request: "Please pray for my mother's healing. She has been battling illness for months.",
    category: "Healing",
    answered: false,
  },
  {
    id: 2,
    country: "Philippines",
    flag: "🇵🇭",
    request: "Pray for my family's reconciliation. We have been divided for too long.",
    category: "Family",
    answered: false,
  },
  {
    id: 3,
    country: "United States",
    flag: "🇺🇸",
    request: "Asking for prayers for financial breakthrough. I need a job urgently.",
    category: "Financial",
    answered: true,
  },
  {
    id: 4,
    country: "Kenya",
    flag: "🇰🇪",
    request: "Please stand with me in prayer for the salvation of my husband.",
    category: "Salvation",
    answered: false,
  },
  {
    id: 5,
    country: "Brazil",
    flag: "🇧🇷",
    request: "Pray for strength during this season of trials. I feel overwhelmed.",
    category: "Strength",
    answered: false,
  },
  {
    id: 6,
    country: "India",
    flag: "🇮🇳",
    request: "Pray for protection and provision for my children's education.",
    category: "Family",
    answered: true,
  },
];

const PrayerRequests = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    request: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.country || !formData.request) {
      toast({
        title: "Please fill in required fields",
        description: "Country and prayer request are required.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
    toast({
      title: "Prayer Request Submitted",
      description: "Thank you! Our community will pray for you.",
    });
    setFormData({ name: "", country: "", request: "", email: "" });
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
              Prayer Requests
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              You are not alone. Share your prayer needs, and our global community 
              will stand with you in faith.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <HandHeart className="w-7 h-7 text-navy-deep" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Submit Your Request
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <Label htmlFor="request">Prayer Request *</Label>
                  <Textarea
                    id="request"
                    placeholder="Share your prayer request..."
                    rows={6}
                    value={formData.request}
                    onChange={(e) =>
                      setFormData({ ...formData, request: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional, kept private)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll only use this to notify you of answered prayers.
                  </p>
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
                      Request Submitted!
                    </span>
                  ) : (
                    "Submit Prayer Request"
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-muted rounded-2xl p-8 mb-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Common Prayer Categories
                </h3>
                <ul className="space-y-3">
                  {[
                    "Healing and restoration",
                    "Family reconciliation",
                    "Financial provision",
                    "Salvation of loved ones",
                    "Strength during trials",
                  ].map((category) => (
                    <li
                      key={category}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <Heart className="w-4 h-4 text-gold" />
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-deep rounded-2xl p-8 text-primary-foreground">
                <p className="font-serif text-lg italic mb-4">
                  "The prayer of a righteous person is powerful and effective."
                </p>
                <p className="text-primary-foreground/70 text-sm">
                  — James 5:16
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Requests */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Community Prayer Requests
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us in praying for these requests from believers around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayerRequests.map((request, index) => (
              <motion.div
                key={request.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{request.flag}</span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {request.country}
                    </span>
                  </div>
                  {request.answered && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      ✓ Answered
                    </span>
                  )}
                </div>

                <p className="text-foreground mb-4">{request.request}</p>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                    {request.category}
                  </span>
                  <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark">
                    <Heart className="w-4 h-4 mr-1" />
                    Praying
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrayerRequests;
