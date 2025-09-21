import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CredibilityCard } from "@/components/CredibilityCard";
import { Search, Sparkles, Loader2 } from "lucide-react";

const MobilePage = () => {
  const [url, setUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState("");

  const handleAnalyze = async () => {
    if (!url) return;
    setIsAnalyzing(true);
    setError("");
    try {
      const aiRes = await fetch('http://localhost:4000/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      if (!aiRes.ok) {
        const errData = await aiRes.json().catch(() => ({}));
        setError(errData.error || "URL does not exist or is not a valid article.");
        setResults(null);
        return;
      }
      const data = await aiRes.json();
      if (!data.credibility || !data.analysis) {
        setError("URL does not exist or is not a valid article.");
        setResults(null);
        return;
      }
      setResults({
        credibility: data.credibility,
        percentage: data.score,
        analysis: data.analysis || {}
      });
    } catch (error) {
      setError("URL does not exist or is not a valid article.");
      setResults(null);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getCredibilityData = () => {
    if (!results) return null;
    
    const { credibility, percentage } = results;
    
    switch (credibility) {
      case "high":
        return {
          title: "Highly Credible",
          description: "This article comes from verified sources with strong factual backing.",
        };
      case "medium":
        return {
          title: "Moderately Credible",
          description: "Article shows mixed signals. Some claims may need additional verification.",
        };
      case "low":
        return {
          title: "Low Credibility",
          description: "Multiple red flags detected. This article may contain misinformation.",
        };
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden ">
      <div className="particles" />
      
      <div className="mt-5 pt-36 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass mb-8 bg-gradient-primary border-none"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 ">
              Mobile Version...
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-white">
              Paste any news article URL to verify its credibility
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" mb-12"
          >
            
          </motion.div>

          {/* Input Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass mb-8 max-w-lg mx-auto"
          >
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="https://example.com/news-article"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-10 bg-muted/50 border-border focus:border-primary transition-colors"
                  disabled={isAnalyzing}
                />
              </div>
              
              <Button 
                onClick={handleAnalyze}
                disabled={!url || isAnalyzing}
                className="w-full btn-hero relative overflow-hidden"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing Article...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Scan for Credibility
                  </>
                )}
                
                {isAnalyzing && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                )}
              </Button>
            </div>
          </motion.div>

          {/* Loading Animation */}
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-glass text-center mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Sparkles className="w-12 h-12 text-primary" />
              </motion.div>
              <p className="text-muted-foreground">
                AI is analyzing the article...
              </p>
            </motion.div>
          )}

          {/* Error Message */}
          {error && !isAnalyzing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="card-glass text-center mb-8 border border-red-500 bg-red-100/30"
            >
              <p className="text-red-700 font-semibold">{error}</p>
            </motion.div>
          )}

          {/* Results */}
          {results && !isAnalyzing && !error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <CredibilityCard
                credibility={results.credibility}
                percentage={results.percentage}
                title={getCredibilityData()?.title || ""}
                description={getCredibilityData()?.description || ""}
              />

              {/* Additional Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card-glass"
              >
                <h3 className="text-lg font-semibold mb-4">Analysis Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sources Checked:</span>
                    <span className="font-medium">{results.analysis.sources}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sentiment:</span>
                    <span className="font-medium capitalize">{results.analysis.sentiment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fact-Checked:</span>
                    <span className="font-medium">
                      {results.analysis.factChecked ? "✅ Yes" : "❌ No"}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Try Another */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  variant="outline"
                  onClick={() => {
                    setUrl("");
                    setResults(null);
                  }}
                  className="w-full glass border-primary/50 hover:bg-primary/10"
                >
                  Check Another Article
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobilePage;



