import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center justify-center">
      <div className="particles" />
      
      <div className="text-center glass-strong rounded-3xl p-12 max-w-md mx-6">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Oops! This page seems to have lost its credibility
        </p>
        <Link to="/">
          <Button className="btn-hero">
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
