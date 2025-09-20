import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome, Download, Shield, Star, Globe } from "lucide-react";
import { useState } from "react";

interface ExtensionCardProps {
  onInstall?: () => void;
}

export const ExtensionCard = ({ onInstall }: ExtensionCardProps) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleInstall = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    onInstall?.();
  };

  return (
    <>
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="card-glass max-w-lg mx-auto p-8 mb-16"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Browser Extension</h2>
          <p className="text-muted-foreground">
            Get instant credibility checking while you browse any news website
          </p>
        </div>

        {/* Extension Mockup */}
        <div className="relative mb-8">
          <motion.div
            className="relative card-glass max-w-sm mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", bounce: 0.3 }}
          >
            {/* Browser Extension Popup Mockup */}
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

            {/* Floating Star Indicator */}
            <motion.div
              className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full p-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>

        {/* Installation Buttons */}
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
            <Globe className="w-5 h-5 mr-2" />
            Firefox Extension (Coming Soon)
          </Button>
        </div>
        
        <div className="mt-6 text-xs text-muted-foreground text-center">
          <p>✓ Free to use • ✓ No data collection • ✓ Open source</p>
        </div>
      </motion.div>
    </>
  );
};