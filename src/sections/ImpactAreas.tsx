const areas = [
  {
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop',
    title: 'Food & Hunger Relief',
    description:
      'We run regular food distribution programs targeting vulnerable families and individuals across underserved communities in Nigeria.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop',
    title: 'Medical Outreach',
    description:
      'Free medical consultations, medications, and health screenings brought directly to communities with little or no access to healthcare.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop',
    title: 'Widows & Orphans Care',
    description:
      'Providing emotional support, material aid, and long-term care programs for widows and orphaned children who have no one to turn to.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&auto=format&fit=crop',
    title: 'Community Development',
    description:
      'Investing in people and infrastructure — from skills acquisition programs to community sanitation drives that create lasting change.',
  },
];

export default function ImpactAreas() {
  return (
    <section className="bg-[#1B3A6B] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Serving Nigeria, One Life at a Time
          </h2>
          <p className="text-white/60 text-base max-w-xl">
            Our work is hands-on, community-driven, and rooted in the love of
            Christ.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white/5 border border-white/10 rounded-sm overflow-hidden hover:bg-white/10 transition-colors duration-200"
            >
              <img
                src={area.image}
                alt={area.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-[#C9A84C] font-semibold text-lg">
                  {area.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
