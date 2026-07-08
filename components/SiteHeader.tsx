"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo, { MeridianMark } from "./Logo";

const navLinks = [
  { label: "Tours", href: "/tours" },
  { label: "Destinations", href: "/#trending" },
  { label: "Why Us", href: "/#why" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-abyss/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/75 transition-colors duration-200 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/tours"
          className="hidden rounded-full border border-white/30 px-5 py-2 text-sm transition-colors duration-200 hover:border-gold hover:text-gold md:block"
        >
          Plan a journey
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

    </header>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-abyss px-5 pb-8 text-white md:hidden">
          <div className="flex h-16 items-center justify-between">
            <span className="flex items-center gap-2.5">
              <MeridianMark className="h-7 w-7 text-gold" />
              <span className="font-display text-lg tracking-wide">
                Your Company&rsquo;s Name
              </span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="mt-14 flex flex-col gap-7"
            onClick={() => setOpen(false)}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display text-4xl text-white transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/tours"
            onClick={() => setOpen(false)}
            className="mt-auto rounded-full bg-gold px-6 py-4 text-center font-medium text-abyss transition-colors hover:bg-gold-deep"
          >
            Plan a journey
          </Link>
        </div>
      )}
    </>
  );
}
