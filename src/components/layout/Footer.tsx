import { Link } from "react-router-dom";
import { Globe, Mail, Heart } from "lucide-react";

const footerLinks = {
  about: [
    { name: "About GNI", path: "/who-we-are" },
    { name: "Our Mission", path: "/who-we-are#mission" },
    { name: "Core Values", path: "/who-we-are#values" },
  ],
  prayer: [
    { name: "Daily Prayers", path: "/daily-prayers" },
    { name: "Submit Prayer Request", path: "/prayer-requests" },
    { name: "Share Testimony", path: "/testimonies" },
  ],
  support: [
    { name: "Mission News", path: "/missions-giving" },
    { name: "Give", path: "/missions-giving#give" },
    { name: "Contact Us", path: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <Globe className="w-6 h-6 text-navy-deep" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold block leading-tight">
                  Global Network
                </span>
                <span className="text-xs text-gold tracking-wider uppercase">
                  of Intercessors
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Connecting passionate people for fervent intercession for global revival, 
              righteousness, and preparation of the Church for the return of Jesus Christ.
            </p>
            <a
              href="mailto:contact@gni.org"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">contact@gni.org</span>
            </a>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Prayer Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">Prayer</h4>
            <ul className="space-y-3">
              {footerLinks.prayer.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} Global Network of Intercessors. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-primary-foreground/50 hover:text-gold transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <span className="text-primary-foreground/30">|</span>
              <span className="text-primary-foreground/50 text-sm flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-gold fill-gold" /> for His glory
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
