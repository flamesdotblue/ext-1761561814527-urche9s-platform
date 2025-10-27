import React from 'react';
import { Target, Eye, Heart, Book, Award, Users, CalendarDays, ChevronRight } from 'lucide-react';

const cardClass = 'rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-[#a5d6a7]';

export default function InfoSections() {
  return (
    <div>
      {/* Mission, Vision, Values */}
      <section id="about" className="bg-[#e0f2f1] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Mission, Vision, and Values</h2>
            <p className="mt-2 text-slate-700">Grounded in compassion and curiosity, we empower students to lead with integrity and purpose.</p>
          </header>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className={cardClass} aria-labelledby="mission-title">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#a5d6a7] p-2 text-slate-900" aria-hidden>
                  <Target />
                </div>
                <div>
                  <h3 id="mission-title" className="text-lg font-semibold text-slate-900">Mission</h3>
                  <p className="mt-1 text-sm text-slate-700">To provide holistic education that nurtures academic excellence, creativity, and character in a caring community.</p>
                </div>
              </div>
            </article>
            <article className={cardClass} aria-labelledby="vision-title">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#a5d6a7] p-2 text-slate-900" aria-hidden>
                  <Eye />
                </div>
                <div>
                  <h3 id="vision-title" className="text-lg font-semibold text-slate-900">Vision</h3>
                  <p className="mt-1 text-sm text-slate-700">To be a leading center of learning in Rupandehi where students become confident, compassionate global citizens.</p>
                </div>
              </div>
            </article>
            <article className={cardClass} aria-labelledby="values-title">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-[#a5d6a7] p-2 text-slate-900" aria-hidden>
                  <Heart />
                </div>
                <div>
                  <h3 id="values-title" className="text-lg font-semibold text-slate-900">Values</h3>
                  <p className="mt-1 text-sm text-slate-700">Respect, resilience, and responsibility guide our culture of trust, empathy, and collaboration.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Academics, Achievements, Student Life */}
      <section id="academics" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Academic Programs and Student Life</h2>
            <p className="mt-2 text-slate-700">A balanced curriculum and vibrant campus experiences support growth in and beyond the classroom.</p>
          </header>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <article className={cardClass} aria-labelledby="programs-title">
              <img
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop"
                alt="Students studying together in a bright classroom"
                className="h-40 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <div className="mt-4">
                <div className="flex items-center gap-2 text-slate-900">
                  <Book className="h-5 w-5" aria-hidden />
                  <h3 id="programs-title" className="text-lg font-semibold">Programs</h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">From foundational subjects to advanced sciences and humanities, our curriculum cultivates inquiry and mastery.</p>
                <a href="#admissions" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline decoration-[#a5d6a7] underline-offset-4 hover:opacity-90">
                  View curriculum <ChevronRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>

            <article className={cardClass} aria-labelledby="achievements-title">
              <img
                src="https://images.unsplash.com/photo-1659080907377-ee6a57fb6b9c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdHVkZW50JTIwaG9sZGluZyUyMGElMjB0cm9waHl8ZW58MHwwfHx8MTc2MTU2MTk1NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
                alt="Student holding a trophy celebrating success"
                className="h-40 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <div className="mt-4">
                <div className="flex items-center gap-2 text-slate-900">
                  <Award className="h-5 w-5" aria-hidden />
                  <h3 id="achievements-title" className="text-lg font-semibold">Achievements</h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">Consistent board results, national Olympiad participation, and community leadership define our success.</p>
                <a href="#news" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline decoration-[#a5d6a7] underline-offset-4 hover:opacity-90">
                  See highlights <ChevronRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>

            <article className={cardClass} aria-labelledby="studentlife-title">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
                alt="Students participating in outdoor sports and activities"
                className="h-40 w-full rounded-lg object-cover"
                loading="lazy"
              />
              <div className="mt-4">
                <div className="flex items-center gap-2 text-slate-900">
                  <Users className="h-5 w-5" aria-hidden />
                  <h3 id="studentlife-title" className="text-lg font-semibold">Student Life</h3>
                </div>
                <p className="mt-2 text-sm text-slate-700">Clubs, sports, arts, and service-learning offer avenues to explore interests and build lasting friendships.</p>
                <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline decoration-[#a5d6a7] underline-offset-4 hover:opacity-90">
                  Join a club <ChevronRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Admissions highlight */}
      <section id="admissions" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-yellow-200 bg-[#fff9c4] p-6 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">Admissions Open</h3>
                <p className="mt-2 text-slate-800">Apply for the upcoming academic session. Scholarships and need-based assistance are available for eligible students.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <a href="#contact" className="inline-flex items-center rounded-md bg-[#a5d6a7] px-4 py-2 text-slate-900 font-semibold shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]">Speak to Admissions</a>
                <a href="#news" className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-900 font-semibold hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]">Important Dates</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section id="news" className="bg-[#e0f2f1] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">News & Events</h2>
            <p className="mt-2 text-slate-700">Recent updates, announcements, and happenings around campus.</p>
          </header>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                date: 'Nov 18, 2025',
                title: 'Science Exhibition and Innovation Fair',
                excerpt: 'Students showcase projects in robotics, renewable energy, and applied science.',
                img: 'https://images.unsplash.com/photo-1581091014534-8987c1d252c9?q=80&w=1200&auto=format&fit=crop',
              },
              {
                date: 'Dec 02, 2025',
                title: 'Admissions Information Session',
                excerpt: 'Meet our faculty and learn about scholarships, curriculum, and campus culture.',
                img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
              },
              {
                date: 'Dec 15, 2025',
                title: 'Sports Day and Community Fest',
                excerpt: 'A celebration of teamwork with track events, football, and cultural performances.',
                img: 'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((n, i) => (
              <article key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-[#a5d6a7]" aria-labelledby={`news-title-${i}`}>
                <img src={n.img} alt="Event highlight" className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-5">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CalendarDays className="h-4 w-4" aria-hidden />
                    <time dateTime={new Date(n.date).toISOString()} className="text-xs font-medium">{n.date}</time>
                  </div>
                  <h3 id={`news-title-${i}`} className="mt-2 text-lg font-semibold text-slate-900">{n.title}</h3>
                  <p className="mt-1 text-sm text-slate-700">{n.excerpt}</p>
                  <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-900 underline decoration-[#a5d6a7] underline-offset-4 hover:opacity-90">
                    Learn more <ChevronRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
