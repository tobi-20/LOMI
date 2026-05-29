const pillars = [
  {
    title: 'Relieve',
    description:
      'Exploring God-given grace to relieve humanity of pain — through food, medicine, and material support for those who have nothing.',
  },
  {
    title: 'Liberate',
    description:
      'Breaking cycles of poverty and dependency by addressing root causes, not just symptoms.',
  },
  {
    title: 'Empower',
    description:
      'Equipping individuals with skills, resources, and confidence to stand on their own and lift others around them.',
  },
  {
    title: 'Multiply',
    description:
      'Building a culture of giving — where those who have been helped become helpers themselves.',
  },
];

export default function Mission() {
  return (
    <main className="bg-[#F9F7F4]">
      {/* Hero Strip */}
      <section className="bg-[#FDF8EE] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Why We Exist
          </span>
          <h1
            className="text-[#1B3A6B] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Mission
          </h1>
          <p className="text-[#1A1A1A]/60 text-base max-w-xl mx-auto">
            To liberate and build up people for self-help and the helping of
            others.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-[#1B3A6B]/10 rounded-sm p-8 flex flex-col gap-3 shadow-sm">
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
                Our Vision
              </span>

              <p
                className="text-[#1B3A6B] text-lg font-semibold leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Curbing hunger, empowering people — one community at a time.
              </p>
            </div>

            <div className="bg-white border border-[#1B3A6B]/10 rounded-sm p-8 flex flex-col gap-3 shadow-sm">
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
                Our Mission
              </span>

              <p
                className="text-[#1B3A6B] text-lg font-semibold leading-relaxed"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                To liberate and build up people for self-help and the helping of
                others.
              </p>
            </div>
          </div>

          <div className="w-full h-80 rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&auto=format&fit=crop"
              alt="Our Mission"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#1B3A6B] py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="text-center flex flex-col gap-3">
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              How We Do It
            </span>

            <h2
              className="text-white text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The Four Pillars of Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-white/5 border border-white/10 rounded-sm p-6 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-[#C9A84C] text-2xl font-bold"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    0{index + 1}
                  </span>

                  <h3 className="text-white font-semibold text-lg">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-white/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-xl mx-auto flex flex-col gap-5">
          <h2
            className="text-[#1B3A6B] text-2xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Be Part of the Mission
          </h2>

          <p className="text-[#1A1A1A]/60 text-base">
            Your support — whether through giving, volunteering, or spreading
            the word — directly advances this mission on the ground in Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-[#C9A84C] hover:bg-[#b8933d] text-white font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
            >
              Give Today
            </a>

            <a
              href="/volunteer"
              className="border border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
