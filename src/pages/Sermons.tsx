import { sermons } from '@/data/sermons';

export default function Sermons() {
  return (
    <section className="bg-[#F9F7F4] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
            The Word
          </span>
          <h1
            className="text-[#1B3A6B] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Sermons & Messages
          </h1>
          <p className="text-[#1A1A1A]/60 text-base max-w-xl mx-auto">
            Be edified, equipped, and empowered by the Word of God through these
            messages.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white border border-[#1B3A6B]/10 rounded-sm overflow-hidden shadow-sm flex flex-col"
            >
              {/* YouTube Embed */}
              <div
                className="relative w-full"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${sermon.youtubeId}`}
                  title={sermon.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                <h3
                  className="text-[#1B3A6B] font-semibold text-base leading-snug"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {sermon.title}
                </h3>
                <p className="text-[#1A1A1A]/50 text-xs">{sermon.preacher}</p>
                <p className="text-[#C9A84C] text-xs font-medium mt-auto pt-2">
                  {sermon.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
