export default function About() {
  return (
    <main className="bg-[#F9F7F4]">
      {/* Hero Strip */}
      <section className="bg-[#1B3A6B] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h1
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About LOMI
          </h1>
          <p className="text-white/60 text-base">
            A faith-driven organisation committed to curbing hunger and
            empowering people.
          </p>
        </div>
      </section>

      {/* Organisation */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            The Organisation
          </span>
          <h2
            className="text-[#1B3A6B] text-2xl md:text-3xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Lawrence Oluwadare Ministries International
          </h2>
          <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
            Founded in May 2022, LOMI is a Nigerian Christian nonprofit
            organisation built on a single conviction — that no family should go
            to bed hungry. We exist to curb hunger, empower individuals, and
            build communities that can sustain themselves and serve others.
          </p>
          <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
            Our work spans food relief, medical outreach, care for widows and
            orphans, and community development — all rooted in the belief that
            practical compassion is one of the highest expressions of faith.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-[#1B3A6B]/10" />
      </div>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-5">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Our Story
          </span>
          <h2
            className="text-[#1B3A6B] text-2xl md:text-3xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Born Out of a Vision
          </h2>
          <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
            LOMI did not begin as a business plan or a program — it began as a
            burden. Pastor Lawrence Oluwadare received a vision revealing that
            families across Nigeria would soon struggle to afford even the most
            basic necessities. That revelation became a mandate.
          </p>
          <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
            In response, he founded LOMI in 2022 — not to build an institution,
            but to build people. The driving force has always been clear:
            explore God's given grace to relieve humanity of pain, liberate
            individuals from the grip of poverty, and equip them to become
            agents of help for others around them.
          </p>
          <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
            What started as a vision is now active on the ground — feeding
            families, reaching the sick, and walking alongside the vulnerable
            across Nigeria.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-4">
        <div className="border-t border-[#1B3A6B]/10" />
      </div>

      {/* Founder */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          {/* Placeholder Photo */}
          <div className="w-36 h-36 rounded-sm bg-[#1B3A6B]/10 flex items-center justify-center shrink-0">
            <span className="text-5xl">👤</span>
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-3">
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              Meet the Founder
            </span>
            <h2
              className="text-[#1B3A6B] text-2xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Pastor Lawrence Oluwadare
            </h2>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
              Pastor Lawrence Oluwadare is the founder and visionary behind
              LOMI. Driven by faith and a deep sense of responsibility toward
              the vulnerable, he has dedicated himself to building an
              organisation that does not just preach compassion — but practises
              it daily on the streets of Nigeria.
            </p>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
              His vision is simple but profound: that every person, regardless
              of their circumstance, deserves dignity, care, and the opportunity
              to rise.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
