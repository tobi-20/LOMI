import img1 from '@/assets/images/DSC_0341.webp';

const areas = [
  {
    title: 'Food Distribution',
    description:
      'Join our teams on the ground during food outreach programs — packing, distributing, and serving families in need.',
  },
  {
    title: 'Medical Support',
    description:
      'Healthcare professionals and support staff needed during free medical outreach events across communities.',
  },
  {
    title: 'Community Outreach',
    description:
      'Help us identify vulnerable individuals, coordinate logistics, and represent LOMI in your local community.',
  },
  {
    title: 'Administrative Support',
    description:
      'Behind-the-scenes roles in communications, social media, data management, and event coordination.',
  },
];
const inputClass =
  'bg-white border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1B3A6B] transition-colors';
export default function Volunteer() {
  return (
    <main className="bg-[#F9F7F4]">
      {/* Hero Strip */}
      <section className="bg-[#FDF8EE] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1
            className="text-[#1B3A6B] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Contact Us
          </h1>
          <p className="text-[#1A1A1A]/60 text-base max-w-xl mx-auto">
            Have a question, partnership inquiry, or want to learn more about
            our work? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Volunteer Areas — image left */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full h-80 rounded-sm overflow-hidden">
            <img
              src={img1}
              alt="Volunteering"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
                Where You Can Help
              </span>
              <h2
                className="text-[#1B3A6B] text-2xl md:text-3xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Find Your Role
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area) => (
                <div
                  key={area.title}
                  className="bg-white border border-[#1B3A6B]/10 rounded-sm p-5 flex flex-col gap-2 shadow-sm"
                >
                  <h3 className="text-[#C9A84C] font-semibold text-sm">
                    {area.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 text-xs leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              Sign Up
            </span>
            <h2
              className="text-[#1B3A6B] text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Serve?
            </h2>
            <p className="text-[#1A1A1A]/60 text-sm">
              Fill out the form and we'll reach out with next steps.
            </p>
          </div>

          <form
            action="https://formsubmit.co/lomi.relief@gmail.com"
            method="POST"
            className="flex flex-col gap-5"
          >
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Volunteer Application — LOMI"
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 000 000 0000"
                className={inputClass}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Area of Interest
              </label>

              <select
                name="area"
                required
                className="bg-white border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1B3A6B] transition-colors"
              >
                <option value="">Select an area</option>
                {areas.map((area) => (
                  <option key={area.title} value={area.title}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Why do you want to volunteer?
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about yourself..."
                className={inputClass + ' resize-none'}
              />
            </div>

            <button
              type="submit"
              className="bg-[#C9A84C] hover:bg-[#b8933d] text-white font-semibold py-3.5 rounded-sm transition-colors duration-200 text-base mt-2"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
