import img1 from '@/assets/images/food.webp';
import img2 from '@/assets/images/DSC_0499.webp';
import img3 from '@/assets/images/DSC_0558.webp';
import img4 from '@/assets/images/n edits.webp';

const areas = [
  {
    image: img1,
    title: 'Food & Hunger Relief',
    description:
      'We run regular food distribution programs targeting vulnerable families and individuals across underserved communities in Nigeria.',
  },
  {
    image: img2,
    title: 'Medical Outreach',
    description:
      'Free medical consultations, medications, and health screenings brought directly to communities with little or no access to healthcare.',
  },
  {
    image: img3,
    title: 'Widows & Orphans Care',
    description:
      'Providing emotional support, material aid, and long-term care programs for widows and orphaned children who have no one to turn to.',
  },
  {
    image: img4,
    title: 'Community Development',
    description:
      'Investing in people and infrastructure — from skills acquisition programs to community sanitation drives that create lasting change.',
  },
];

export default function ImpactAreas() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            What We Do
          </span>
          <h2
            className="text-[#1B3A6B] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Serving Nigeria, One Life at a Time
          </h2>
          <p className="text-[#1A1A1A]/60 text-base max-w-xl">
            Our work is hands-on, community-driven, and rooted in the love of
            Christ.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white border border-[#1B3A6B]/10 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <img
                src={area.image}
                alt={area.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-[#1B3A6B] font-semibold text-lg">
                  {area.title}
                </h3>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
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
