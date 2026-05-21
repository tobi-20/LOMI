import { Link } from 'react-router-dom';

export default function DonateCTA() {
  return (
    <section className="bg-[#F9F7F4] py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Make a Difference
          </span>
          <h2
            className="text-[#1B3A6B] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Your Gift Feeds, Heals & Restores
          </h2>
          <p className="text-[#1A1A1A]/60 text-base max-w-xl">
            Every contribution — no matter the size — directly funds food
            relief, medical outreach, and care for widows and orphans across
            Nigeria.
          </p>
        </div>

        {/* Primary CTA */}
        <Link
          to="/donate"
          className="bg-[#C9A84C] hover:bg-[#b8933d] text-white font-semibold px-10 py-4 rounded-sm transition-colors duration-200 text-lg"
        >
          Give What You Can
        </Link>

        {/* Trust line */}
        <p className="text-[#1A1A1A]/40 text-xs">
          Secure payments powered by Paystack · Every naira goes to the cause
        </p>
      </div>
    </section>
  );
}
