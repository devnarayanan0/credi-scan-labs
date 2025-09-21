import { motion } from "framer-motion";
import { ExtensionCard } from "@/components/ExtensionCard";

const ExtensionPage = () => {

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      <div className="particles" />

      <div className="mt-4 pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass mb-8 bg-gradient-primary border-none max-w-lg mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Browser Extension
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-white">
              Install our browser extension for instant credibility checking while you browse
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

          </motion.div>

          {/* Extension Card */}
          <ExtensionCard />
        </div>
      </div>
    </div>
  );
};

export default ExtensionPage;