import React, { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Academics', href: '#academics' },
  { name: 'Admissions', href: '#admissions' },
  { name: 'News & Events', href: '#news' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#e0f2f1]/90 backdrop-blur supports-[backdrop-filter]:bg-[#e0f2f1]/70 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4" role="navigation" aria-label="Primary Navigation">
          <div className="flex items-center gap-3">
            <div aria-hidden className="h-10 w-10 rounded-full bg-[#a5d6a7] flex items-center justify-center shadow-inner">
              <span className="text-slate-800 font-bold">SS</span>
            </div>
            <div className="leading-tight">
              <span className="block font-semibold text-slate-900">Shree Santi Namuna Secondary School</span>
              <span className="block text-xs text-slate-600">Rupandehi, Nepal</span>
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-[#a5d6a7]/30 focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
          </button>

          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#a5d6a7] px-1 py-1 rounded ${idx === 0 ? 'aria-[current=true]:text-slate-900' : ''}`}
                aria-current={idx === 0 ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#admissions"
              className="ml-2 inline-flex items-center rounded-md bg-[#fff9c4] px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]"
            >
              Apply Now
            </a>
          </nav>
        </div>

        {open && (
          <div className="md:hidden pb-4" role="dialog" aria-label="Mobile Menu">
            <div className="grid gap-2 rounded-md border border-[#a5d6a7]/40 bg-white p-3 shadow">
              {navItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded px-3 py-2 text-sm font-medium text-slate-800 hover:bg-[#a5d6a7]/20 focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]"
                  aria-current={idx === 0 ? 'page' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#admissions"
                className="rounded-md bg-[#fff9c4] px-3 py-2 text-sm font-semibold text-slate-900 shadow hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]"
                onClick={() => setOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
