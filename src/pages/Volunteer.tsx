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

export default function Volunteer() {
  return (
    <main className="bg-[#F9F7F4]">
      {/* Hero Strip */}
      <section className="bg-[#1B3A6B] py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Get Involved
          </span>
          <h1
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Volunteer With LOMI
          </h1>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            You don't need money to make a difference. Your time, skills, and
            presence matter just as much.
          </p>
        </div>
      </section>

      {/* Volunteer Areas */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          <div className="text-center flex flex-col gap-3">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {areas.map((area) => (
              <div
                key={area.title}
                className="bg-white border border-[#1B3A6B]/10 rounded-sm p-6 flex flex-col gap-3 shadow-sm"
              >
                <h3 className="text-[#C9A84C] font-semibold text-lg">
                  {area.title}
                </h3>
                <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="bg-[#1B3A6B] py-16 px-4">
        <div className="max-w-xl mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col gap-3">
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
              Sign Up
            </span>
            <h2
              className="text-white text-2xl md:text-3xl font-bold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Ready to Serve?
            </h2>
            <p className="text-white/60 text-sm">
              Fill out the form and we'll reach out with next steps.
            </p>
          </div>

          <form
            action="https://formsubmit.co/info@lomi.org"
            method="POST"
            className="flex flex-col gap-5"
          >
            {/* Honeypot */}
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Volunteer Application — LOMI"
            />

            <div className="flex flex-col gap-1.5">
              <label className="text-white/80 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="bg-white/10 border border-white/20 rounded-sm px-4 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/80 text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="bg-white/10 border border-white/20 rounded-sm px-4 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/80 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+234 000 000 0000"
                className="bg-white/10 border border-white/20 rounded-sm px-4 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/80 text-sm font-medium">
                Area of Interest
              </label>
              <select
                name="area"
                required
                className="bg-white/10 border border-white/20 rounded-sm px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
              >
                <option value="" className="text-black">
                  Select an area
                </option>
                <option value="Food Distribution" className="text-black">
                  Food Distribution
                </option>
                <option value="Medical Support" className="text-black">
                  Medical Support
                </option>
                <option value="Community Outreach" className="text-black">
                  Community Outreach
                </option>
                <option value="Administrative Support" className="text-black">
                  Administrative Support
                </option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-white/80 text-sm font-medium">
                Why do you want to volunteer?
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us a little about yourself and why you'd like to serve..."
                className="bg-white/10 border border-white/20 rounded-sm px-4 py-2.5 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
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
