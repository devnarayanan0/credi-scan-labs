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
            <p className="mt-6 text-xl text-muted-foreground font-medium max-w-2xl mx-auto pt-8 text-black">
              Instantly check the credibility of any news article using AI-powered analysis. Paste a link and get a trust score, source verification, much fast and easy !
            </p>
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
          className="flex flex-col sm:flex-row gap-6 justify-center items-center "
        >
                <Link to="/mobile">
                  <Button className="btn-hero group shadow-2xl text-xl px-12 py-7 rounded-2xl">
              Mobile Version
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
                <Link to="/extension">
                  <Button variant="outline" className="glass hover:bg-primary/10 text-foreground px-12 py-7 shadow-2xl rounded-2xl text-xl">
              Get Extension
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};