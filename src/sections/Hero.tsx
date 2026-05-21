import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-linear-to-br from-[#1B3A6B] to-[#0f2340] min-h-[90vh] flex items-center justify-center text-center px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Eyebrow */}
        <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
          Welcome to LOMI
        </span>

        {/* Headline */}
        <h1
          className="text-white text-4xl md:text-6xl font-bold leading-tight"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Spreading the Gospel,
          <br /> Transforming Lives
        </h1>

        {/* Subtext */}
        <p className="text-white/70 text-base md:text-lg max-w-xl">
          Lawrence Oluwadare Ministries International is committed to reaching
          the nations with the undiluted Word of God — raising disciples,
          restoring hope, and advancing God's Kingdom.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            to="/donate"
            className="bg-[#C9A84C] hover:bg-[#b8933d] text-white font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
          >
            Give Today
          </Link>
          <Link
            to="/about"
            className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
