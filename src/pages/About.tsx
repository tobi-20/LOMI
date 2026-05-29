import img1 from '@/assets/images/DSC_0434 copy.webp';
import img2 from '@/assets/images/_DSC7316.webp';
export default function About() {
  return (
    <main className="bg-[#F9F7F4]">
      {/* Hero Strip */}
      <section className="bg-[#FDF8EE] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h1
            className="text-[#1B3A6B] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Lawrence Oluwadare Ministries International
          </h1>
          <p className="text-[#1A1A1A]/60 text-base">
            A faith-driven organisation committed to curbing hunger and
            empowering people across Nigeria.
          </p>
        </div>
      </section>

      {/* Organisation — image right */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              The Organisation
            </span>
            <h2
              className="text-[#1B3A6B] text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Built on Faith, Purpose & Compassion
            </h2>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
              Founded in May 2022, LOMI is a Nigerian Christian nonprofit built
              on one conviction — no family should go to bed hungry. We exist to
              curb hunger, empower individuals, and build communities that
              sustain themselves and serve others.
            </p>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
              Our work spans food relief, medical outreach, care for widows and
              orphans, and community development — all rooted in the belief that
              practical compassion is one of the highest expressions of faith.
            </p>
          </div>
          <div className="w-full h-80 rounded-sm overflow-hidden">
            <img
              src={img1}
              alt="LOMI Organisation"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-[#1B3A6B]/10" />
      </div>

      {/* Story + Founder — merged */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 rounded-sm overflow-hidden order-last md:order-first">
            <img
              src={img2}
              alt="Pastor Lawrence Oluwadare"
              loading="lazy"
              className="w-full h-fit rounded-sm overflow-hidden"
            />
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              The Founder & His Vision
            </span>
            <h2
              className="text-[#1B3A6B] text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Pastor Lawrence Oluwadare
            </h2>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
              LOMI was not born from a business plan — it began as a burden.
              Pastor Lawrence received a vision revealing that families across
              Nigeria would soon struggle to afford even the most basic
              necessities. That revelation became a mandate to act.
            </p>
            <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
              He founded LOMI in 2022 with a simple but profound conviction:
              explore God's given grace to relieve humanity of pain, liberate
              people from poverty, and equip them to become agents of help for
              those around them.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
