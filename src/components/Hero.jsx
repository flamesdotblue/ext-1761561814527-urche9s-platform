import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full" aria-label="Hero">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[75vh] w-full overflow-hidden">
        <img
          src="https://cdn.dribbble.com/userupload/16537236/file/original-3c9baf8044faac370974ead6e9a41217.jpg?resize=1504x1003&vertical=center"
          alt="Soft blue to purple gradient abstract background"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/20 to-white/10" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Inspiring Lifelong Learning in Rupandehi
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-100/90 drop-shadow">
              Shree Santi Namuna Secondary School fosters a safe, inclusive, and innovative environment where every student thrives.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#admissions"
                className="inline-flex items-center rounded-md bg-[#fff9c4] px-4 py-2 text-slate-900 font-semibold shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]"
              >
                Explore Admissions
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-md bg-[#a5d6a7] px-4 py-2 text-slate-900 font-semibold shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
