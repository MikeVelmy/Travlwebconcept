import { CalendarX2, Route, ShieldCheck } from "lucide-react";

const props = [
  {
    icon: ShieldCheck,
    title: "Vetted local guides",
    body: "Every one of our guides is interviewed in person and rated by past travelers — 140+ guides across 32 countries, never subcontracted.",
  },
  {
    icon: CalendarX2,
    title: "Flexible cancellations",
    body: "Plans change. Move your departure or cancel free up to 30 days out — no forms, no fine print, refund within a week.",
  },
  {
    icon: Route,
    title: "Tailored itineraries",
    body: "Departures are adjusted around the people on them — pace, food, and free days included. No two run exactly the same.",
  },
];

export default function ValueProps() {
  return (
    <section id="why" className="scroll-mt-20 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Why us
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight">
            Travel far, <em className="italic text-gold">worry little</em>.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/70">
            A decade of running small-group journeys taught us exactly where
            trips go wrong — so we engineered the guesswork out of ours.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8 lg:col-span-8">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="border-t border-white/15 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"
            >
              <prop.icon className="h-6 w-6 text-gold" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl">{prop.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {prop.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
