import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { WhatsAppIcon } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact — Your Company's Name",
  description:
    "Talk to a travel designer — WhatsApp, email, or phone. Real humans, usually replying within the hour.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-ink pb-14 pt-28 text-white lg:pb-20 lg:pt-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Get in touch
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.08]">
              Planning something?{" "}
              <em className="italic text-gold">Say hello.</em>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-white/75">
              Every message is answered by a travel designer who has walked the
              routes we sell — no bots, no ticket numbers.
            </p>
          </div>
        </section>

        <section className="bg-mist/40">
          <div className="mx-auto max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid lg:grid-cols-[380px_1fr] lg:py-16">
            <div className="space-y-4">
              <a
                href="https://wa.me/?text=Hi!%20I%27m%20planning%20a%20trip%20and%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-[#25d366] p-5 text-white shadow-lg shadow-abyss/10 transition-colors hover:bg-[#1ebe5b]"
              >
                <WhatsAppIcon className="h-8 w-8 shrink-0" />
                <span>
                  <span className="block font-medium">Chat on WhatsApp</span>
                  <span className="mt-0.5 block text-sm text-white/85">
                    Fastest — usually answered within the hour
                  </span>
                </span>
              </a>

              <div className="rounded-2xl border border-ink/10 bg-white p-5">
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3.5">
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-storm/60">
                        Email
                      </span>
                      <a
                        href="mailto:hello@yourcompany.com"
                        className="mt-1 block font-medium text-ink transition-colors hover:text-gold-deep"
                      >
                        hello@yourcompany.com
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-storm/60">
                        Phone
                      </span>
                      <a
                        href="tel:+0000000000"
                        className="mt-1 block font-medium text-ink transition-colors hover:text-gold-deep"
                      >
                        Your reachable number
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-storm/60">
                        Office
                      </span>
                      <span className="mt-1 block font-medium text-ink">
                        Your location
                      </span>
                      <span className="mt-0.5 block text-xs tracking-[0.15em] text-storm/60">
                        0.0000° N · 0.0000° E
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <Clock
                      className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.18em] text-storm/60">
                        Hours
                      </span>
                      <span className="mt-1 block font-medium text-ink">
                        Mon – Sat, 8:00 – 18:00 GMT
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
