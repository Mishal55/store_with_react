import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const TrendingSection = () => {
  const trendingCategories = [
    {
      title: "Summer Essentials",
      subtitle: "Light & Breezy",
      image: "clothes.avif",
      trend: "+24%",
      color: "from-primary to-primary-variant"
    },
    {
      title: "Work & Professional",
      subtitle: "Power Dressing",
      image: "clothes 2.jpg",
      color: "from-accent to-accent-secondary"
    },
    {
      title: "Weekend Casual",
      subtitle: "Comfort Meets Style",
      image: "clothes1.jpg",
      trend: "+31%", 
      color: "from-electric to-primary"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <TrendingUp className="h-6 w-6 text-accent" />
          <h2 className="text-4xl font-bold text-foreground">
            What's Trending
          </h2>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Stay ahead of the curve with our most sought-after collections
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trendingCategories.map((category, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Background Image */}
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`}></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              {/* Trending Badge */}
              <div className="absolute top-6 right-6">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {category.trend}
                </Badge>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-white/80 text-sm uppercase tracking-wider font-medium">
                    {category.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold">
                    {category.title}
                  </h3>
                </div>

                <Button 
                  variant="secondary" 
                  className="group bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Animated Elements */}
            <div className="absolute top-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center bg-muted/30 rounded-2xl p-12">
        <h3 className="text-3xl font-bold text-foreground mb-4">
          Join Our Style Community
        </h3>
        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
          Get exclusive access to new arrivals, style tips, and member-only discounts. 
          Be the first to know about trending pieces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            Become a Member
          </Button>
          <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary">
            Style Quiz
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
