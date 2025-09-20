import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Sparkles, Smartphone, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 40) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { path: "/", label: "Home", icon: Sparkles },
    { path: "/mobile", label: "Mobile", icon: Smartphone },
    { path: "/extension", label: "Extension", icon: Globe },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
        <div className="fixed top-14 left-0 w-full z-50 hidden md:flex justify-center">
          <motion.nav 
            className="glass-strong rounded-2xl px-6 py-3 w-max mx-auto shadow-2xl shadow-grey/40"
            initial={{ y: -100, opacity: 0 }}
            animate={showNavbar ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
            transition={{ type: 'tween', ease: showNavbar ? 'easeOut' : 'easeIn', duration: 0.4 }}
          >
            <div className="flex items-center justify-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative px-4 py-2 rounded-xl transition-all duration-300"
                  >
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                  <span className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                </motion.div>
                
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
            </div>
          </motion.nav>
        </div>

      {/* Mobile Navigation */}
      <motion.nav 
        className="fixed top-6 right-6 z-50 md:hidden"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          className="glass-strong rounded-2xl p-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </motion.button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-16 right-0 glass-strong rounded-2xl p-4 min-w-[160px]"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="relative px-3 py-2 rounded-xl transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        className="flex items-center space-x-3"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                          {item.label}
                        </span>
                      </motion.div>
                      
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-primary/10 rounded-xl border border-primary/20"
                          layoutId="activeMobileTab"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};