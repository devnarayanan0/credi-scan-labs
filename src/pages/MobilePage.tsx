import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CredibilityCard } from "@/components/CredibilityCard";
import { Search, Sparkles, Loader2, Shield, Star } from "lucide-react";

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
      
      {/* Mobile Extension Mockups in Background */}
      {/* Left Side Mobile */}
      <motion.div
        className="absolute left-16 top-1/4 hidden xl:block"
        initial={{ opacity: 0, x: -50, rotate: -15 }}
        animate={{ opacity: 0.6, x: 0, rotate: -5 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-4 shadow-2xl border-4 border-gray-700">
          <div className="w-full h-full bg-gradient-hero rounded-[2rem] overflow-hidden relative">
            {/* Phone Screen Content */}
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-white">News Credibility</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              </div>
              
              <div className="bg-success/30 rounded-lg p-3 border border-success/40 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white">Credibility Score</span>
                  <span className="text-2xl font-bold text-success">87%</span>
                </div>
                <div className="bg-success/40 rounded-full h-2">
                  <div className="bg-success rounded-full h-2 w-[87%] shadow-lg" />
                </div>
              </div>
              
              <div className="text-sm text-white space-y-2 bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Sources verified:</span>
                  <span className="font-bold text-success">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fact-checked:</span>
                  <span className="text-success font-bold">✓ Yes</span>
                </div>
              </div>
            </div>
            
            {/* Phone UI Elements */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Right Side Mobile */}
      <motion.div
        className="absolute right-16 top-1/3 hidden xl:block"
        initial={{ opacity: 0, x: 50, rotate: 15 }}
        animate={{ opacity: 0.6, x: 0, rotate: 5 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="w-64 h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-4 shadow-2xl border-4 border-gray-700">
          <div className="w-full h-full bg-gradient-hero rounded-[2rem] overflow-hidden relative">
            {/* Phone Screen Content */}
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-white">News Credibility</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
              </div>
              
              <div className="bg-warning/30 rounded-lg p-3 border border-warning/40 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-white">Credibility Score</span>
                  <span className="text-2xl font-bold text-warning">72%</span>
                </div>
                <div className="bg-warning/40 rounded-full h-2">
                  <div className="bg-warning rounded-full h-2 w-[72%] shadow-lg" />
                </div>
              </div>
              
              <div className="text-sm text-white space-y-2 bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Sources verified:</span>
                  <span className="font-bold text-warning">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fact-checked:</span>
                  <span className="text-warning font-bold">⚠️ Mixed</span>
                </div>
              </div>
              
              <div className="mt-3 bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                <div className="text-sm text-white font-semibold mb-2">Source Info</div>
                <div className="space-y-1 text-sm text-white">
                  <div className="flex justify-between">
                    <span className="font-medium">Region:</span>
                    <span className="font-bold">US</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Type:</span>
                    <span className="font-bold">Online News</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone UI Elements */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-gray-600 rounded-full"></div>
            
            {/* Floating Star */}
            <motion.div
              className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full p-1"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      
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

              {/* Analysis Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="card-glass"
              >
                <h3 className="text-lg font-semibold mb-4">Source Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Source Name:</span>
                    <span className="font-medium">{results.analysis.source_name || "Unknown"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Region:</span>
                    <span className="font-medium">{results.analysis.region || "Unknown"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Language:</span>
                    <span className="font-medium">{results.analysis.language || "Unknown"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{results.analysis.type || "Unknown"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date Analyzed:</span>
                    <span className="font-medium">{results.analysis.date_published || "Unknown"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fact-Checked:</span>
                    <span className="font-medium">
                      {results.analysis.fact_checked ? "✅ Yes" : "❌ No"}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Credibility Reason */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="card-glass"
              >
                <h3 className="text-lg font-semibold mb-3">Credibility Assessment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {results.analysis.reason || "No detailed assessment available."}
                </p>
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



