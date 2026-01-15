import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-6xl font-bold text-gold mb-4">404</h1>
          <p className="text-muted-foreground mb-8">Page not found</p>
          <Button variant="gold" asChild>
            <Link to="/"><Home className="w-4 h-4 mr-2" />Return Home</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
