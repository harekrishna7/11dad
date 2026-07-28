import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Cpu } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Dharmanagar Hub', path: '/hub' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Investors', path: '/investors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-border py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            {!logoError ? (
              <img 
                src="/logo.png" 
                alt="DADsync Logo" 
                className="h-8 w-auto object-contain group-hover:scale-105 transition-transform" 
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight leading-none">DADsync</span>
              <span className="text-[10px] text-muted-foreground mt-0.5">Dharmanagar Ai Datasync Pvt.Ltd</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === link.path
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                )}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link
              to="/contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Request Demo
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary',
                    location.pathname === link.path
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground text-center rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Request Demo
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12 md:py-16 mt-20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                {!logoError ? (
                  <img 
                    src="/logo.png" 
                    alt="DADsync Logo" 
                    className="h-6 w-auto object-contain" 
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="bg-primary text-primary-foreground p-1 rounded-md">
                    <Cpu className="w-5 h-5" />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight leading-none">DADsync</span>
                  <span className="text-[10px] text-muted-foreground mt-0.5">Dharmanagar Ai Datasync Pvt.Ltd</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Powering Northeast India's AI Future. Premier AI, Cloud, Data Infrastructure, and HPC solutions for the region and beyond.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/investors" className="hover:text-primary transition-colors">Investors</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-primary transition-colors">AI Compute Platform</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">GPU Cloud</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Enterprise Storage</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Managed Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="https://www.instagram.com/dadsync2026?igsh=MW15NHk5ejQ1Yzh1bA%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DADsync. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground">Privacy Policy</a>
              <a href="#" className="hover:text-foreground">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
