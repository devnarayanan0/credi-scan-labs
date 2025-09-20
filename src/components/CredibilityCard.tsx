import { motion } from "framer-motion";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

interface CredibilityCardProps {
  credibility: "high" | "medium" | "low";
  percentage: number;
  title: string;
  description: string;
  delay?: number;
}

export const CredibilityCard = ({ 
  credibility, 
  percentage, 
  title, 
  description, 
  delay = 0 
}: CredibilityCardProps) => {
  const getIcon = () => {
    switch (credibility) {
      case "high":
        return <CheckCircle className="w-8 h-8" />;
      case "medium":
        return <AlertTriangle className="w-8 h-8" />;
      case "low":
        return <XCircle className="w-8 h-8" />;
    }
  };

  const getCardClass = () => {
    switch (credibility) {
      case "high":
        return "card-success";
      case "medium":
        return "card-warning";
      case "low":
        return "card-danger";
    }
  };

  const getEmoji = () => {
    switch (credibility) {
      case "high":
        return "✅";
      case "medium":
        return "⚠️";
      case "low":
        return "❌";
    }
  };

  return (
    <motion.div
      className={`${getCardClass()} relative overflow-hidden`}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        bounce: 0.3
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start space-x-4">
        <motion.div
          className="flex-shrink-0"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {getIcon()}
        </motion.div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{getEmoji()}</span>
              <motion.span 
                className="text-2xl font-bold"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: delay + 0.4 }}
              >
                {percentage}%
              </motion.span>
            </div>
          </div>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};