import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/LOMI_LOGO.png';

type NavLinkClassArgs = {
  isActive: boolean;
};

const navLinks = [
  { label: 'What We Do', to: '/' },
  { label: 'Who We Are', to: '/about' },

  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Donate', to: '/donate' },
  { label: 'Contact', to: '/contact' },
];
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (currentScrollY < viewportHeight) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
        setMenuOpen(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#1B3A6B] fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ease-in-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
                className={({ isActive }: NavLinkClassArgs) =>
                  `text-sm font-medium relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#C9A84C] after:transition-all after:duration-300 after:ease-in-out ${
                    isActive
                      ? 'text-[#C9A84C] after:w-full'
                      : 'text-white hover:text-[#C9A84C] after:w-0 hover:after:w-full'
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
                className={({ isActive }: NavLinkClassArgs) =>
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
