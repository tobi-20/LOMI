import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/LOMI_LOGO.png';

const links = [
  { label: 'What We Do', to: '/' },
  { label: 'Who We Are', to: '/about' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Donate', to: '/donate' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2340] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img
            src={logo}
            alt="LOMI Logo"
            className="h-12 w-auto object-contain self-start"
          />
          <p className="text-white/50 text-sm leading-relaxed">
            Lawrence Oluwadare Ministries International — serving Nigeria
            through faith-driven charity, compassion, and community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[#C9A84C] font-semibold text-sm uppercase tracking-widest">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-2 text-white/50 text-sm">
            <li>Nigeria</li>
            <li>
              <a
                href="mailto:info@lomi.org"
                className="hover:text-[#C9A84C] transition-colors duration-200"
              >
                info@lomi.org
              </a>
            </li>
            <li>
              <a
                href="tel:+2340000000000"
                className="hover:text-[#C9A84C] transition-colors duration-200"
              >
                +234 000 000 0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-white/30 text-xs">
        <p>
          © {new Date().getFullYear()} Lawrence Oluwadare Ministries
          International. All rights reserved.
        </p>
        <p>Built with faith & purpose.</p>
      </div>
    </footer>
  );
}
