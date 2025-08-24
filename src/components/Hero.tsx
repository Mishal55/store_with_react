import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageCarousel from "@/components/ImageCarousel";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-rise">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent animate-pulse delay-[100ms]"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  Trusted by 50k+ customers
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Step Into</span>
                <span className="block gradient-hero bg-clip-text text-transparent animate-glow">
                  Effortless Elegance
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-md">
                Discover curated fashion that blends timeless silhouettes with
                modern luxury. Designed to elevate your everyday.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-500">
              <Button variant="hero" size="lg" className="group">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 hover:border-primary"
              >
                Watch Lookbook
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8 animate-fade-in-up delay-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50k+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div className="relative lg:ml-8">
            <ImageCarousel
              images={[heroBanner, heroBanner]}
              autoPlay={true}
              showDots={true}
              className="group shadow-soft hover:shadow-glow hover:scale-[1.02] transition-all duration-700 animate-drift"
            />

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-drift delay-300"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-drift delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
