"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="w-full border-b bg-white sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* LOGO */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold tracking-tight text-[var(--color-primary)] cursor-pointer"
        >
          <Link href="/">MRGC</Link>
        </motion.div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:opacity-70 transition text-[var(--color-primary)]">Home</Link>
          <Link href="/about" className="hover:opacity-70 transition text-[var(--color-primary)]">About MRGC</Link>

          {/* SERVICES DROPDOWN */}
          <div 
            className="relative flex items-center h-16" // Full height so hover doesn't break easily
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {/* Now a clickable link instead of a button */}
            <Link 
              href="/services" 
              className="flex items-center gap-1.5 hover:opacity-70 transition text-[var(--color-primary)] outline-none"
            >
              Services
              <motion.div
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center justify-center text-gray-400"
              >
                {/* Modern SVG Chevron */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2.5} 
                  stroke="currentColor" 
                  className="w-3.5 h-3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </motion.div>
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  // Positioned perfectly below the header with absolute & top-full
                  className="absolute top-[calc(100%-8px)] left-0 bg-white shadow-xl rounded-xl border border-gray-100 w-64 p-2 flex flex-col gap-1 text-sm z-50 text-gray-700"
                >
                  <Link href="/services/tender-management" className="hover:bg-gray-50 hover:text-[var(--color-primary)] px-3 py-2.5 rounded-lg transition-colors">Tender Management</Link>
                  <Link href="/services/procurement-advisory" className="hover:bg-gray-50 hover:text-[var(--color-primary)] px-3 py-2.5 rounded-lg transition-colors">Procurement Advisory</Link>
                  <Link href="/services/export-import" className="hover:bg-gray-50 hover:text-[var(--color-primary)] px-3 py-2.5 rounded-lg transition-colors">Export–Import</Link>
                  <Link href="/services/medical-equipment" className="hover:bg-gray-50 hover:text-[var(--color-primary)] px-3 py-2.5 rounded-lg transition-colors">Medical Equipment</Link>
                  <Link href="/services/training" className="hover:bg-gray-50 hover:text-[var(--color-primary)] px-3 py-2.5 rounded-lg transition-colors">Training</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/sectors" className="hover:opacity-70 transition text-[var(--color-primary)]">Sectors</Link>
          <Link href="/insights" className="hover:opacity-70 transition text-[var(--color-primary)]">Insights</Link>
          <Link href="/contact" className="hover:opacity-70 transition text-[var(--color-primary)]">Contact</Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link href="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-md text-sm font-semibold shadow-md hover:shadow-lg transition-shadow"
            >
              Book Consultation
            </motion.button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 -mr-2 text-[var(--color-primary)] focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <motion.div 
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-6 h-6"
          >
            {/* Clean SVG Hamburger / Close Icon */}
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </motion.div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100 shadow-inner"
          >
            <div className="px-6 py-6 flex flex-col space-y-5 text-base font-medium text-gray-700">
              <Link href="/" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)] transition">Home</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)] transition">About MRGC</Link>
              <Link href="/services" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)] transition">Services</Link>
              <Link href="/sectors" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)] transition">Sectors</Link>
              <Link href="/insights" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)] transition">Insights</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)] transition">Contact</Link>

              <div className="pt-4 border-t border-gray-100">
                <Link href="/contact" onClick={() => setOpen(false)} className="w-full block">
                  <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[var(--color-accent)] text-white py-3 rounded-md shadow-sm font-semibold hover:shadow-md transition-shadow"
                  >
                    Book Consultation
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}