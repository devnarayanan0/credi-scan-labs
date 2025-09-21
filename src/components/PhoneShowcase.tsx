import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Shield, Zap, CheckCircle, Globe, TrendingUp } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Search,
    title: "Paste & Analyze",
    description: "Simply paste any news article URL and get instant credibility analysis",
    color: "from-primary to-accent",
    bgGradient: "bg-gradient-to-br from-primary/20 to-accent/20"
  },
  {
    icon: Shield,
    title: "AI Verification",
    description: "Advanced AI cross-references multiple trusted sources for accuracy",
    color: "from-accent to-secondary",
    bgGradient: "bg-gradient-to-br from-accent/20 to-secondary/20"
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Get credibility scores with detailed explanations in seconds",
    color: "from-secondary to-warning",
    bgGradient: "bg-gradient-to-br from-secondary/20 to-warning/20"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Supports news sources from around the world in multiple languages",
    color: "from-warning to-success",
    bgGradient: "bg-gradient-to-br from-warning/20 to-success/20"
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Track misinformation patterns and trending fact-checks",
    color: "from-success to-primary",
    bgGradient: "bg-gradient-to-br from-success/20 to-primary/20"
  }
];

export const PhoneShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative min-h-screen py-20">
      {/* Phone Frame */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
            <br />
            The Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scroll through our revolutionary features in an immersive 3D experience
          </p>
        </motion.div>

        <div className="relative flex justify-center">
          {/* Phone Container with 3D perspective */}
          <div className="relative perspective-1000">
            <motion.div
              className="relative w-80 h-[600px] mx-auto"
              style={{
                rotateY: useTransform(scrollYProgress, [0, 1], [15, -15]),
                rotateX: useTransform(scrollYProgress, [0, 1], [5, -5]),
              }}
            >
              {/* Phone Frame */}
              <div className="absolute inset-0 glass-strong rounded-[3rem] p-4 shadow-2xl border-4 border-glass-border">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  
                  {/* Phone Screen Content */}
                  <div className="relative h-full overflow-hidden">
                    {features.map((feature, index) => {
                      const progress = useTransform(
                        scrollYProgress,
                        [index / features.length, (index + 1) / features.length],
                        [0, 1]
                      );
                      
                      const y = useTransform(progress, [0, 1], ["100%", "0%"]);
                      const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 0]);
                      const scale = useTransform(progress, [0, 0.5, 1], [0.8, 1, 0.8]);

                      return (
                        <motion.div
                          key={index}
                          className={`absolute inset-4 rounded-2xl p-6 ${feature.bgGradient}`}
                          style={{
                            y,
                            opacity,
                            scale,
                            zIndex: features.length - index
                          }}
                        >
                          <div className="flex flex-col items-center text-center h-full justify-center space-y-6">
                            <motion.div
                              className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color}`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <feature.icon className="w-8 h-8 text-white" />
                            </motion.div>
                            
                            <div>
                              <h3 className="text-2xl font-bold mb-3 text-foreground">
                                {feature.title}
                              </h3>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {feature.description}
                              </p>
                            </div>

                            {index === features.length - 1 && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-3 w-full"
                              >
                                <Link to="/mobile" className="block">
                                  <Button className="w-full btn-hero">
                                    Try Mobile Version
                                    <CheckCircle className="w-4 h-4 ml-2" />
                                  </Button>
                                </Link>
                                <Link to="/extension" className="block">
                                  <Button variant="outline" className="w-full glass">
                                    Get Extension
                                  </Button>
                                </Link>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Phone UI Elements */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-muted-foreground/30 rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-muted-foreground/30 rounded-full"></div>
                </div>
              </div>

              {/* Phone Shadow */}
              <div className="absolute inset-0 rounded-[3rem] bg-black/20 blur-xl transform translate-y-8 scale-95 -z-10"></div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Scroll to explore features</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto relative"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mx-auto mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>
    </div>
  );
};