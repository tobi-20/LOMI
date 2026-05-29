const contactDetails = [
  {
    label: 'Email',
    value: 'info@lomi.org',
    href: 'mailto:info@lomi.org',
  },
  {
    label: 'Phone',
    value: '+2340000000000',
    href: 'tel:+2340000000000',
  },
  {
    label: 'Location',
    value: 'Nigeria',
    href: null,
  },
];

export default function Contact() {
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

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
                Reach Us Directly
              </span>
              <h2
                className="text-[#1B3A6B] text-2xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                We're Here to Help
              </h2>
              <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                Whether you want to donate, volunteer, partner with us, or
                simply find out more — reach out and we'll respond as soon as
                possible.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-[#1A1A1A]/40 text-xs font-semibold uppercase tracking-widest">
                    {item.label}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#1B3A6B] font-medium text-base hover:text-[#C9A84C] transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#1B3A6B] font-medium text-base">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/info@lomi.org"
            method="POST"
            className="flex flex-col gap-5"
          >
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Message — LOMI Contact Form"
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
                className="bg-white border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1B3A6B] transition-colors"
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
                className="bg-white border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1B3A6B] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                className="bg-white border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1B3A6B] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#1A1A1A] text-sm font-medium">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Write your message here..."
                className="bg-white border border-[#1B3A6B]/20 rounded-sm px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1B3A6B] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-[#C9A84C] hover:bg-[#b8933d] text-white font-semibold py-3.5 rounded-sm transition-colors duration-200 text-base"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
