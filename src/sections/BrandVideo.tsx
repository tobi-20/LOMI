export default function BrandVideo() {
  return (
    <section className="bg-[#1B3A6B] py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="text-center flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            Our Story in Motion
          </span>
          <h2
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            See the Work Up Close
          </h2>
          <p className="text-white/60 text-base max-w-xl mx-auto">
            A glimpse into who we are, what we do, and why it matters.
          </p>
        </div>

        {/* Video Embed — replace VIDEO_ID with real YouTube ID */}
        <div
          className="w-full relative rounded-sm overflow-hidden shadow-xl"
          style={{ paddingBottom: '56.25%' }}
        >
          <iframe
            src="https://www.youtube.com/embed/Xui0Hn5aDVE"
            title="LOMI Brand Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
