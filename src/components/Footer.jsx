import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Shree Santi Namuna Secondary School</h3>
            <p className="mt-2 text-sm text-slate-700">A nurturing learning community in Rupandehi dedicated to excellence, integrity, and service.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2 text-slate-700">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-600" aria-hidden />
                <span>Rupandehi District, Lumbini Province, Nepal</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <Phone className="mt-0.5 h-4 w-4 text-slate-600" aria-hidden />
                <a href="tel:+977-71-000000" className="hover:underline">+977 71 000000</a>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <Mail className="mt-0.5 h-4 w-4 text-slate-600" aria-hidden />
                <a href="mailto:info@ssnss.edu.np" className="hover:underline">info@ssnss.edu.np</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Connect</h4>
            <p className="mt-3 text-sm text-slate-700">Follow us for updates and stories from campus.</p>
            <div className="mt-3 flex gap-3">
              <a href="#" className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-[#e0f2f1] focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]" aria-label="Visit our Facebook">Facebook</a>
              <a href="#" className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-[#e0f2f1] focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]" aria-label="Visit our Twitter">Twitter</a>
              <a href="#" className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-[#e0f2f1] focus:outline-none focus:ring-2 focus:ring-[#a5d6a7]" aria-label="Visit our YouTube">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 md:flex-row">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} Shree Santi Namuna Secondary School. All rights reserved.</p>
          <nav aria-label="Footer Navigation" className="text-xs text-slate-600">
            <a href="#about" className="hover:underline">About</a>
            <span className="mx-2">•</span>
            <a href="#admissions" className="hover:underline">Admissions</a>
            <span className="mx-2">•</span>
            <a href="#news" className="hover:underline">News</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
