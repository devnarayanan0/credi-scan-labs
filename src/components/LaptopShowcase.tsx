import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Shield, Zap, CheckCircle, Globe, TrendingUp, Star } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Search,
    title: "Paste & Analyze",
    description: "Simply paste any news article URL and get instant credibility analysis",
    score: "94%",
    sources: 12,
    status: "Verified",
    color: "from-primary to-accent"
  },
  {
    icon: Shield,
    title: "AI Verification",
    description: "Advanced AI cross-references multiple trusted sources for accuracy",
    score: "87%",
    sources: 8,
    status: "Fact-Checked",
    color: "from-accent to-secondary"
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get credibility scores with detailed explanations in seconds",
    score: "96%",
    sources: 15,
    status: "Verified",
    color: "from-secondary to-warning"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Supports news sources from around the world in multiple languages",
    score: "89%",
    sources: 10,
    status: "Multi-Source",
    color: "from-warning to-success"
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Track misinformation patterns and trending fact-checks",
    score: "92%",
    sources: 14,
    status: "Trending",
    color: "from-success to-primary"
  }
];

export const LaptopShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            
             Browser Extension
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience real-time credibility checking directly in your browser
          </p>
        </motion.div>

        <div className="relative flex justify-center">
          {/* Laptop Container with 3D perspective */}
          <div className="relative perspective-2000">
            <motion.div
              className="relative w-[900px] h-[600px] mx-auto"
              style={{
                rotateY: useTransform(scrollYProgress, [0, 1], [8, -8]),
                rotateX: useTransform(scrollYProgress, [0, 1], [2, -2]),
              }}
            >
              {/* Laptop Base */}
              <div className="absolute bottom-0 w-full h-8 bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/40 rounded-b-3xl transform perspective-1000 rotateX-60"></div>
              
              {/* Laptop Screen */}
              <div className="relative w-full h-[520px] glass-strong rounded-t-3xl p-6 shadow-2xl border-4 border-glass-border bg-gradient-to-br from-background to-muted/20">
                
                {/* Browser Frame */}
                <div className="w-full h-full bg-card rounded-2xl overflow-hidden border border-border shadow-inner">
                  
                  {/* Browser Header */}
                  <div className="h-12 bg-muted/30 border-b border-border flex items-center px-4 space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <div className="w-3 h-3 rounded-full bg-warning"></div>
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                    </div>
                    <div className="flex-1 bg-muted/50 rounded-lg px-3 py-1 text-sm text-muted-foreground">
                      https://news-website.com/breaking-news-article
                    </div>
                  </div>

                  {/* Browser Content with Extension Popup */}
                  <div className="relative h-[calc(100%-3rem)] bg-gradient-to-br from-muted/10 to-muted/30 p-8">
                    
                    {/* Fake News Article Background */}
                    <div className="absolute inset-8 bg-card/50 rounded-lg p-6 text-xs text-muted-foreground leading-relaxed opacity-40">
                      <h1 className="text-lg font-bold mb-4 text-foreground">Breaking: Major News Story</h1>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                      <p className="mb-3">Sed do eiusmod tempor incididunt ut labore et dolore...</p>
                      <p>Ut enim ad minim veniam, quis nostrud exercitation...</p>
                    </div>

                    {/* Extension Popup */}
                    <div className="absolute top-4 right-4 w-80">
                      {features.map((feature, index) => {
                        const progress = useTransform(
                          scrollYProgress,
                          [index / features.length, (index + 1) / features.length],
                          [0, 1]
                        );
                        
                        const opacity = useTransform(progress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
                        const scale = useTransform(progress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
                        const y = useTransform(progress, [0, 0.3, 0.7, 1], [20, 0, 0, -20]);

                        return (
                          <motion.div
                            key={index}
                            className="glass-strong rounded-xl p-6 border border-primary/20 shadow-xl"
                            style={{
                              opacity,
                              scale,
                              y,
                              position: "absolute",
                              top: 0,
                              right: 0,
                              zIndex: features.length - index
                            }}
                          >
                            {/* Extension Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center space-x-2">
                                <motion.div
                                  className={`p-2 rounded-lg bg-gradient-to-r ${feature.color}`}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  <feature.icon className="w-5 h-5 text-white" />
                                </motion.div>
                                <span className="font-semibold text-foreground">News Credibility</span>
                              </div>
                              <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                            </div>
                            
                            {/* Feature Info */}
                            <div className="mb-4">
                              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {feature.description}
                              </p>
                            </div>

                            {/* Credibility Score */}
                            <div className="bg-success/20 rounded-lg p-3 border border-success/30 mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-foreground">Credibility Score</span>
                                <span className="text-2xl font-bold text-success">{feature.score}</span>
                              </div>
                              <div className="bg-success/30 rounded-full h-2">
                                <motion.div
                                  className="bg-success rounded-full h-2"
                                  initial={{ width: 0 }}
                                  animate={{ width: feature.score }}
                                  transition={{ duration: 1.5, delay: 0.5 }}
                                />
                              </div>
                            </div>
                            
                            {/* Stats */}
                            <div className="text-xs text-muted-foreground space-y-1 mb-4">
                              <div className="flex justify-between">
                                <span>Sources verified:</span>
                                <span className="text-foreground">{feature.sources}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Status:</span>
                                <span className="text-success">✓ {feature.status}</span>
                              </div>
                            </div>
                            
                            {/* Action Button */}
                            {index === features.length - 1 ? (
                              <div className="space-y-2">
                                <Link to="/extension" className="block">
                                  <Button className="w-full btn-hero text-sm">
                                    Install Extension
                                    <CheckCircle className="w-4 h-4 ml-2" />
                                  </Button>
                                </Link>
                                <Link to="/mobile" className="block">
                                  <Button variant="outline" className="w-full glass text-sm">
                                    Try Mobile Version
                                  </Button>
                                </Link>
                              </div>
                            ) : (
                              <Button className="w-full" size="sm">
                                View Details
                              </Button>
                            )}

                            {/* Floating Star */}
                            <motion.div
                              className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Star className="w-3 h-3" />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Shadow */}
              <div className="absolute inset-0 rounded-t-3xl bg-black/20 blur-xl transform translate-y-12 scale-95 -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-50 h-50 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        />
      </div>
    </div>
  );
};