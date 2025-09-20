import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome, Download, Shield, Zap, Globe, Star } from "lucide-react";
import { useState } from "react";

const ExtensionPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleInstall = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const features = [
    {
      icon: Zap,
      title: "Instant Analysis",
      description: "Get credibility scores without leaving the page",
    },
    {
      icon: Shield,
      title: "Real-time Protection",
      description: "Automatic warnings for suspicious content",
    },
    {
      icon: Globe,
      title: "Works Everywhere",
      description: "Compatible with all major news websites",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="particles" />
      
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              initial={{
                x: "50vw",
                y: "50vh",
                opacity: 1,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Browser <span className="gradient-text">Extension</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Install our browser extension for instant credibility checking while you browse
            </p>
          </motion.div>

          {/* Extension Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-16"
          >
            <div className="flex justify-center">
              <motion.div
                className="relative card-glass max-w-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", bounce: 0.3 }}
              >
                {/* Browser Extension Mockup */}
                <div className="bg-gradient-card rounded-xl p-6 border border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-6 h-6 text-primary" />
                      <span className="font-semibold">News Credibility</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-success/20 rounded-lg p-3 border border-success/30">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Credibility Score</span>
                        <span className="text-2xl font-bold text-success">94%</span>
                      </div>
                      <div className="mt-2 bg-success/30 rounded-full h-2">
                        <motion.div
                          className="bg-success rounded-full h-2"
                          initial={{ width: 0 }}
                          animate={{ width: "94%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground space-y-1">
                      <div className="flex justify-between">
                        <span>Sources verified:</span>
                        <span>12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fact-checked:</span>
                        <span className="text-success">✓ Yes</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Floating indicators */}
                <motion.div
                  className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="card-feature text-center"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Installation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="card-glass max-w-lg mx-auto p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Install?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of users protecting themselves from misinformation
              </p>
              
              <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    className="btn-hero w-full group"
                    onClick={handleInstall}
                  >
                    <Chrome className="w-5 h-5 mr-2" />
                    Install Chrome Extension
                    <Download className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                  </Button>
                </motion.div>
                
                <Button 
                  variant="outline" 
                  className="w-full glass border-muted-foreground/20 hover:bg-muted/20"
                  disabled
                >
                  Firefox Extension (Coming Soon)
                </Button>
              </div>
              
              <div className="mt-6 text-xs text-muted-foreground">
                <p>✓ Free to use • ✓ No data collection • ✓ Open source</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionPage;