import { useState } from "react";
import type { MouseEvent } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Sparkles,
  Users,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import navLogo from "../assets/nav-logo.png";

const WATCH_RECAP_URL = "https://youtu.be/EB4wg_AiZVc?si=jEcomf8Hv64xhyS7";

// About dropdown (unchanged)
const aboutDropdownItems = [
  { name: "About SCA", path: "/about#about-sca", icon: LayoutGrid },
  { name: "Why attend", path: "/about#why-attend", icon: Sparkles },
  { name: "Get Involved", path: "/about#get-involved", icon: Users },
];

type NavItem = {
  name: string;
  path?: string;
  sectionId?: string;
  hasDropdown?: boolean;
};

const navLinks: NavItem[] = [
  { name: "Speakers", sectionId: "summitSpeakers" },
  { name: "Gallery", sectionId: "gallery" },
  { name: "Testimonials", sectionId: "testimonials" },
];

const linkBase =
  "text-base font-medium whitespace-nowrap transition-colors duration-150";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // On the home page: scroll straight to the section.
  // On any other page: go home with the hash, and the home page scrolls there.
  const goToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (pathname === "/") {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto py-6 flex items-center justify-between gap-6">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={navLogo}
            alt="SheCode Africa — Summit 2026"
            className="h-12 sm:h-17.5 w-45 object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center xl:justify-end xl:w-full gap-5.5">
          {navLinks.map((link) =>
            link.sectionId ? (
              <a
                key={link.name}
                href={`/#${link.sectionId}`}
                onClick={(e) => goToSection(e, link.sectionId!)}
                className={`${linkBase} text-black hover:text-primary-main-pink`}
              >
                {link.name}
              </a>
            ) : (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.hasDropdown && setDesktopDropdownOpen(true)
                }
                onMouseLeave={() =>
                  link.hasDropdown && setDesktopDropdownOpen(false)
                }
              >
                <NavLink
                  to={link.path!}
                  className={({ isActive }) =>
                    `flex items-center gap-1 ${linkBase} ${
                      isActive
                        ? "text-primary-main-pink"
                        : "text-black hover:text-primary-main-pink"
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
                      <ChevronDown
                        className="w-4 h-4 ml-0.5"
                        strokeWidth={2.5}
                      />
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
            ),
          )}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 ml-15.5 shrink-0">
          <a
            href={WATCH_RECAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4.5 rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white font-medium text-base transition-colors shadow-sm"
          >
            Watch Recap
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex xl:hidden">
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
                  animate={{ rotate: 0, opacity: 1 }}
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
            className="xl:hidden border-t border-gray-100 bg-white overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => {
                if (link.sectionId) {
                  return (
                    <a
                      key={link.name}
                      href={`/#${link.sectionId}`}
                      onClick={(e) => goToSection(e, link.sectionId!)}
                      className="block px-4 py-2.5 rounded-lg text-base font-medium text-secondary-main-black hover:bg-primary-very-light-pink"
                    >
                      {link.name}
                    </a>
                  );
                }

                if (link.hasDropdown) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                        className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-base font-medium text-secondary-main-black hover:bg-primary-very-light-pink"
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
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path!}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-base font-medium ${
                        isActive
                          ? "bg-primary-very-light-pink text-primary-main-pink"
                          : "text-secondary-main-black hover:bg-primary-very-light-pink"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}

              <div className="pt-4 flex flex-col gap-2">
                <a
                  href={WATCH_RECAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-8 py-4.5 rounded-lg bg-primary-main-pink hover:bg-primary-dark-pink text-white font-medium text-base transition"
                >
                  Watch Recap
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
