import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Sparkles,
  Users,
  MessageCircleQuestion,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import navLogo from "../assets/nav-logo.png";

const aboutDropdownItems = [
  { name: "About SCA", path: "/about", icon: LayoutGrid },
  { name: "Why attend", path: "/about#why-attend", icon: Sparkles },
  { name: "Get Involved", path: "/get-involved", icon: Users },
  { name: "Accessibility", path: "/accessibility", icon: MessageCircleQuestion }
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about", hasDropdown: true },
  { name: "Speakers", path: "/speakers" },
  { name: "Schedule", path: "/schedule" },
  { name: "Accessibility", path: "/accessibility" },
  { name: "FAQs", path: "/faqs" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-47.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={navLogo}
            alt="SheCode Africa — Summit 2026"
            className="h-12 sm:h-20.5 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className="relative"
              onMouseEnter={() =>
                link.hasDropdown && setDesktopDropdownOpen(true)
              }
              onMouseLeave={() =>
                link.hasDropdown && setDesktopDropdownOpen(false)
              }
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1 text-base font-semibold transition-colors duration-150 ${
                    isActive
                      ? "text-primary-main-pink font-bold"
                      : "text-secondary-main-black hover:text-primary-main-pink"
                  }`
                }
              >
                {link.name}
                {link.hasDropdown && (
                  <motion.span
                    animate={{ rotate: desktopDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <ChevronDown className="w-4 h-4 ml-0.5" strokeWidth={2.5} />
                  </motion.span>
                )}
              </NavLink>

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {desktopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 pt-3 w-64 z-50"
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-3">
                        {aboutDropdownItems.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <motion.div
                              key={item.path}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.15, delay: i * 0.04 }}
                            >
                              <Link
                                to={item.path}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-very-light-pink transition-colors"
                              >
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-light-pink text-primary-main-pink shrink-0">
                                  <Icon className="w-4 h-4" strokeWidth={2} />
                                </span>
                                <span className="text-sm font-semibold text-secondary-main-black">
                                  {item.name}
                                </span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="#tickets"
            className="px-8 py-4.5 rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white font-semibold text-sm transition shadow-sm hover:shadow"
          >
            Get Tickets
          </a>
          <a
            href="#sponsor"
            className="px-8 py-4.5 rounded-lg border border-primary-main-pink text-primary-main-pink hover:bg-primary-very-light-pink font-semibold text-sm transition"
          >
            Become a sponsor
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-secondary-main-black hover:bg-primary-very-light-pink focus:outline-none"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <X className="w-7 h-7" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 1, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <Menu className="w-7 h-7" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-semibold text-secondary-main-black hover:bg-primary-very-light-pink"
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: mobileAboutOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex"
                      >
                        <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {mobileAboutOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-2"
                        >
                          {aboutDropdownItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => {
                                  setIsOpen(false);
                                  setMobileAboutOpen(false);
                                }}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary-very-light-pink transition-colors"
                              >
                                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-light-pink text-primary-main-pink shrink-0">
                                  <Icon className="w-4 h-4" strokeWidth={2} />
                                </span>
                                <span className="text-sm font-semibold text-secondary-main-black">
                                  {item.name}
                                </span>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-base font-semibold ${
                        isActive
                          ? "bg-primary-very-light-pink text-primary-main-pink"
                          : "text-secondary-main-black hover:bg-primary-very-light-pink"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              )}

              <div className="pt-4 flex flex-col gap-2">
                <a
                  href="#tickets"
                  className="w-full text-center px-8 py-4.5 rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white font-semibold text-sm transition"
                >
                  Get Tickets
                </a>
                <a
                  href="#sponsor"
                  className="w-full text-center px-8 py-4.5 rounded-lg border border-primary-main-pink text-primary-main-pink hover:bg-primary-very-light-pink font-semibold text-sm transition"
                >
                  Become a sponsor
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
