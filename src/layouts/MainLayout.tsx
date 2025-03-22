import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from '../components/DarkModeToggle';
import NotificationSystem, { Notification } from '../components/NotificationSystem';
import SearchBar from '../components/SearchBar';
import MobileMenu from '../components/MobileMenu';

const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const location = useLocation();

  const handleSearch = (query: string) => {
    // Add a notification when search is performed
    addNotification({
      id: Date.now().toString(),
      message: `Searching for: ${query}`,
      type: 'info'
    });
  };

  const addNotification = (notification: Notification) => {
    setNotifications(prev => [...prev, notification]);
    // Auto dismiss after 3 seconds
    setTimeout(() => {
      dismissNotification(notification.id);
    }, 3000);
  };

  const dismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Enhanced animation values
  const navLinkVariants = {
    hover: { 
      y: -2,
      color: 'var(--color-primary)',
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: 'spring', 
        stiffness: 500, 
        damping: 10 
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark text-dark dark:text-white">
      <header className="bg-white dark:bg-dark shadow-sm sticky top-0 z-10 backdrop-blur-sm bg-white/90 dark:bg-dark/90">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
              <motion.div
                className="text-3xl w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-lg shadow-md"
                whileHover="hover"
                whileTap="tap"
                variants={logoVariants}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.67 0-5 1.34-5 3v2h2v-2c0-.32.33-1 3-1s3 .68 3 1v2h2v-2c0-1.66-2.33-3-5-3zm-2.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                </svg>
              </motion.div>
              <motion.span
                className="font-extrabold tracking-tight"
                whileHover={{ 
                  backgroundImage: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                transition={{ duration: 0.3 }}
              >
                HRGPTAI
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link to="/" className="transition-colors text-gray-800 dark:text-gray-200">
                      Home
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link to="/features" className="transition-colors text-gray-800 dark:text-gray-200">
                      Features
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link to="/videos" className="transition-colors text-gray-800 dark:text-gray-200">
                      Video Demos
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link to="/testimonials" className="transition-colors text-gray-800 dark:text-gray-200">
                      Success Stories
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link to="/blog" className="transition-colors text-gray-800 dark:text-gray-200">
                      Blog
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link to="/pricing" className="transition-colors text-gray-800 dark:text-gray-200">
                      Pricing
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link to="/faq" className="transition-colors text-gray-800 dark:text-gray-200">
                      FAQ
                    </Link>
                  </motion.div>
                </li>
                <li>
                  <motion.div whileHover="hover" whileTap="tap" variants={navLinkVariants}>
                    <Link to="/contact" className="transition-colors text-gray-800 dark:text-gray-200">
                      Contact
                    </Link>
                  </motion.div>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <SearchBar onSearch={handleSearch} suggestions={['Features', 'Pricing', 'FAQ', 'Contact', 'AI Recruitment', 'Video Interview']} />
              <DarkModeToggle />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 500, 
                  damping: 10 
                }}
              >
                <Link
                  to="/signup"
                  className="hidden md:inline-block btn-primary"
                >
                  Sign Up Free
                </Link>
              </motion.div>
              <motion.button
                className="md:hidden text-2xl"
                onClick={() => setIsMobileMenuOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ☰
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-dark text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.67 0-5 1.34-5 3v2h2v-2c0-.32.33-1 3-1s3 .68 3 1v2h2v-2c0-1.66-2.33-3-5-3zm-2.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold">HRGPTAI</span>
              </motion.div>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Revolutionizing hiring with AI-powered solutions.
              </motion.p>
            </div>
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Quick Links
              </motion.h4>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <Link to="/features" className="text-gray-300 hover:text-white transition-colors">
                    Features
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/videos" className="text-gray-300 hover:text-white transition-colors">
                    Video Demos
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Success Stories
                  </Link>
                </motion.li>
              </ul>
            </div>
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Resources
              </motion.h4>
              <ul className="space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Support
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </motion.li>
              </ul>
            </div>
            <div>
              <motion.h4 
                className="text-lg font-semibold mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Connect
              </motion.h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 500, 
                    damping: 10 
                  }}
                >
                  <span className="text-xl">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 500, 
                    damping: 10 
                  }}
                >
                  <span className="text-xl">Twitter</span>
                </motion.a>
              </div>
            </div>
          </div>
          <motion.div 
            className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p>© {new Date().getFullYear()} HRGPTAI. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Notification System */}
      <NotificationSystem
        notifications={notifications}
        onDismiss={dismissNotification}
      />
    </div>
  );
};

export default MainLayout; 