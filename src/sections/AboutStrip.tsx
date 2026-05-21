const stats = [
  { value: '4+', label: 'Years of Ministry' },
  { value: '50+', label: 'Nations Reached' },
  { value: '1000+', label: 'Lives Transformed' },
  { value: '20+', label: 'Disciples Raised' },
];

export default function AboutStrip() {
  return (
    <section className="bg-[#F9F7F4] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* About Text */}
        <div className="max-w-3xl text-center flex flex-col gap-4">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h2
            className="text-[#1B3A6B] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            A Ministry Built on Faith, Purpose & the Word
          </h2>
          <p className="text-[#1A1A1A]/70 text-base leading-relaxed">
            Founded by Pastor Lawrence Oluwadare, LOMI is a Nigeria-based
            Christian nonprofit dedicated to practical, compassionate service —
            feeding the hungry, caring for widows and orphans, providing medical
            outreach, and building stronger communities in the name of Christ.
          </p>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#1B3A6B]/10 rounded-sm p-6 flex flex-col items-center text-center shadow-sm"
            >
              <span
                className="text-[#C9A84C] text-4xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {stat.value}
              </span>
              <span className="text-[#1A1A1A]/60 text-sm mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
