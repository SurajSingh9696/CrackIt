import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  BarChart3, 
  LogOut, 
  Moon, 
  Sun,
  Sparkles,
  ChevronRight,
  User
} from 'lucide-react';

const Layout = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'Resume', href: '/resume', icon: FileText, gradient: 'from-purple-500 to-pink-500' },
    { name: 'Role Selection', href: '/role', icon: Briefcase, gradient: 'from-orange-500 to-red-500' },
    { name: 'Analytics', href: '/analytics', icon: BarChart3, gradient: 'from-green-500 to-emerald-500' },
    { name: 'Profile', href: '/profile', icon: User, gradient: 'from-indigo-500 to-purple-500' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      {/* Sidebar with glass effect */}
      <aside className="w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-r border-gray-200/50 dark:border-gray-700/50 fixed h-full shadow-xl z-10">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6"
        >
          <div className="flex items-center space-x-2">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden">
              <img src="/CrackIt.png" alt="CrackIt Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                CrackIt
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Interview Prep</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="px-4 space-y-2">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className="relative group block"
                >
                  <div className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg shadow-primary-500/50'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50'
                  }`}>
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium flex-1">{item.name}</span>
                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                  {!active && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Theme</span>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'dark' : 'light'}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={logout}
            className="w-full flex items-center justify-center px-4 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all font-medium shadow-sm hover:shadow-md"
          >
            <LogOut className="w-5 h-5 mr-2" />
            <span>Logout</span>
          </motion.button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64">
        {/* Header with gradient */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 p-6 sticky top-0 z-10 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Welcome back, {user?.name}! 👋
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Ready to ace your next interview?
              </p>
            </div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl p-1 shadow-lg"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl px-4 py-2">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{user?.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-600 font-bold text-xl mr-1 shadow-md">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Content with animated entrance */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-6"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;
