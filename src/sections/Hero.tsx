import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import img1 from '@/assets/images/_DSC1034.webp';
import img2 from '@/assets/images/DSC_0279b.webp';
import img3 from '@/assets/images/c edits copy.webp';
import img4 from '@/assets/images/DSC_0806.webp';

const slides = [
  {
    image: img1,
    caption: 'Feeding Families Across Nigeria',
  },
  {
    image: img2,
    caption: 'Bringing Hope to the Vulnerable',
  },
  {
    image: img3,
    caption: 'Restoring Dignity, One Life at a Time',
  },
  {
    image: img4,
    caption: 'Walking Alongside Widows & Orphans',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-4 gap-6">
        <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">
          Welcome to LOMI
        </span>

        <h1
          className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Spreading the Gospel,
          <br /> Transforming Lives
        </h1>

        {/* Slide Caption */}
        <p className="text-white/70 text-base md:text-lg max-w-xl transition-all duration-700">
          {slides[current].caption}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            to="/donate"
            className="bg-[#C9A84C] hover:bg-[#b8933d] text-white font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
          >
            Give Today
          </Link>
          <Link
            to="/about"
            className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3 rounded-sm transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === current ? 'bg-[#C9A84C] w-6' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
