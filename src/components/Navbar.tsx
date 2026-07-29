import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Accessibility', path: '/accessibility' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
            S
          </div>
          <div>
            <span className="text-xl font-bold text-gray-900 tracking-tight block leading-none">
              SheCode Africa
            </span>
            <span className="text-xs text-purple-600 font-semibold tracking-wider uppercase">
              Summit 2026
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-purple-600 ${
                  isActive
                    ? 'text-purple-600 font-semibold border-b-2 border-purple-600 pb-1'
                    : 'text-gray-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://sca-summit-staging.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 text-white hover:bg-purple-700 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-purple-200"
          >
            Register Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-purple-50 text-purple-600 font-bold'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://sca-summit-staging.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-center bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md mt-4"
          >
            Register Now
          </a>
        </div>
      )}
    </header>
  );
}