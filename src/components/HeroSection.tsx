import { motion } from "framer-motion";
import { TypingText } from "@/components/TypingText";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="pt-44 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">News Credibility</span>
            <br />
            <TypingText 
              text="Checker" 
              className="text-6xl md:text-7xl font-bold text-foreground"
            />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center "
        >
                <Link to="/mobile">
                  <Button className="btn-hero group shadow-lg text-lg px-8 py-5 rounded-xl">
              Mobile Version
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
                <Link to="/extension">
                  <Button variant="outline" className="glass hover:bg-primary/10 text-foreground px-8 py-5 shadow-lg rounded-xl text-lg">
              Get Extension
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};