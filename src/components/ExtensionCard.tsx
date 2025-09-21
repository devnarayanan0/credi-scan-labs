import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Chrome, Download, Shield, Star, Globe, FileText, AlertCircle } from "lucide-react";
import { useState } from "react";

interface ExtensionCardProps {
  onInstall?: () => void;
}

export const ExtensionCard = ({ onInstall }: ExtensionCardProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // First test if server is accessible
      console.log('Testing server connection...');
      const testResponse = await fetch('http://localhost:4000/test');
      if (!testResponse.ok) {
        throw new Error('Server not accessible. Please start the backend server.');
      }

      console.log('Server is accessible, downloading extension...');

      // Download the extension zip
      const response = await fetch('http://localhost:4000/download-extension');
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Download failed: ${response.status} - ${errorText}`);
      }

      const blob = await response.blob();

      // Check if we actually got a zip file
      if (blob.size === 0) {
        throw new Error('Downloaded file is empty');
      }

      console.log('Download successful, file size:', blob.size, 'bytes');

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'NEXBITCred.zip';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Show success effects
      setShowConfetti(true);
      setShowInstructions(true);
      setTimeout(() => setShowConfetti(false), 3000);
      onInstall?.();
    } catch (error) {
      console.error('Download error:', error);
      alert(`Download failed: ${error.message}\n\nPlease make sure:\n1. The backend server is running (npm run dev or node server.js)\n2. The server is accessible at http://localhost:4000`);
    } finally {
      setIsDownloading(false);
    }
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
        className="card-glass max-w-6xl mx-auto p-8 mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Download Extension!</h2>
          <p className="text-lg text-muted-foreground">
            Get instant credibility checking directly in your browser
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Extension Mockup */}
          <div className="space-y-8">
            <motion.div
              className="relative card-glass max-w-sm mx-auto lg:mx-0"
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

            {/* Installation Buttons */}
            <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="btn-hero w-full group"
                  onClick={handleDownload}
                  disabled={isDownloading}
                >
                  <Chrome className="w-5 h-5 mr-2" />
                  {isDownloading ? 'Downloading...' : 'Download Chrome Extension'}
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

              <div className="text-xs text-muted-foreground text-center pt-2">
                <p>✓ Free to use • ✓ No data collection • ✓ Open source</p>
              </div>
            </div>
          </div>

          {/* Right Column - Installation Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-6 bg-gradient-card rounded-xl border border-primary/20"
          >
            <div className="flex items-center space-x-2 mb-6">
              <FileText className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Installation Instructions</h3>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <p className="font-medium text-foreground mb-1">Extract the ZIP file</p>
                  <p>Download and extract the NEXBITCred.zip file to a folder on your computer</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <p className="font-medium text-foreground mb-1">Open Chrome Extensions</p>
                  <p>Navigate to <code className="bg-muted px-2 py-1 rounded text-xs">chrome://extensions/</code> in your browser</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <p className="font-medium text-foreground mb-1">Enable Developer Mode</p>
                  <p>Toggle the "Developer mode" switch in the top right corner</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <p className="font-medium text-foreground mb-1">Load Extension</p>
                  <p>Click "Load unpacked" and select the extracted extension folder</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <span className="flex-shrink-0 w-8 h-8 bg-success text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">✓</span>
                <div>
                  <p className="font-medium text-success mb-1">Ready to Use!</p>
                  <p className="text-success">The extension is now installed and ready to verify news credibility</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-warning font-medium mb-1">Important Note</p>
                  <p className="text-xs text-warning">
                    Make sure the backend server is running on localhost:4000 for the extension to work properly.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Message */}
            {showInstructions && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <p className="text-sm text-success font-medium">
                    Download successful! Follow the steps above to install.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};