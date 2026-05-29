const pillars = [
  {
    number: '01',
    title: 'Relieve',
    description:
      'Exploring God-given grace to relieve humanity of pain through food, medicine, and material support.',
  },
  {
    number: '02',
    title: 'Liberate',
    description:
      'Breaking cycles of poverty and dependency by addressing root causes, not just symptoms.',
  },
  {
    number: '03',
    title: 'Empower',
    description:
      'Equipping individuals with skills and resources to stand on their own and lift others.',
  },
  {
    number: '04',
    title: 'Multiply',
    description:
      'Building a culture of giving — where those who have been helped become helpers themselves.',
  },
];

export default function MissionStrip() {
  return (
    <section className="bg-[#FDF8EE] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              Our Mission
            </span>
            <h2
              className="text-[#1B3A6B] text-3xl md:text-4xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              To Liberate & Build Up People
            </h2>
          </div>
          <p
            className="text-[#c5ae6f] text-lg md:text-xl max-w-sm italic font-medium leading-relaxed"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            "For self-help and the helping of others — this is the heartbeat of
            everything we do."
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white border border-[#1B3A6B]/10 rounded-sm p-6 flex flex-col gap-3 shadow-sm"
            >
              <span
                className="text-[#C9A84C] text-2xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {pillar.number}
              </span>
              <h3 className="text-[#1B3A6B] font-semibold text-lg">
                {pillar.title}
              </h3>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
