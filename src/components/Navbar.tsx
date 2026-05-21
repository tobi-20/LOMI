import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/LOMI_LOGO.jpg';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Mission', to: '/mission' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Donate', to: '/donate' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1B3A6B] sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="LOMI Logo"
            className="h-12 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#C9A84C] border-b-2 border-[#C9A84C] pb-0.5'
                      : 'text-white hover:text-[#C9A84C]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-[#1B3A6B] border-t border-[#C9A84C]/30 px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `block text-sm font-medium py-1.5 ${
                    isActive
                      ? 'text-[#C9A84C]'
                      : 'text-white hover:text-[#C9A84C]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
