import { ChevronDown, Search } from "lucide-react";
import { getAllTags, tours } from "@/data/tours";

const fieldLabel =
  "text-[11px] font-medium uppercase tracking-[0.18em] text-storm/70";
const fieldControl =
  "w-full appearance-none bg-transparent pr-6 text-base font-medium text-ink focus:outline-none";

export default function SearchBar() {
  const locations = [...new Set(tours.map((tour) => tour.location))];

  return (
    <form
      action="/tours"
      className="flex w-full max-w-4xl flex-col rounded-3xl bg-white p-3 shadow-2xl shadow-abyss/40 md:flex-row md:items-stretch md:rounded-full md:p-2"
    >
      <label className="flex flex-1 flex-col gap-1 px-4 py-3 md:py-2.5">
        <span className={fieldLabel}>Where to</span>
        <span className="relative">
          <select name="destination" defaultValue="" className={fieldControl}>
            <option value="">Anywhere</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-storm/50"
          />
        </span>
      </label>

      <span className="mx-4 h-px bg-ink/10 md:mx-0 md:my-2 md:h-auto md:w-px" />

      <label className="flex flex-1 flex-col gap-1 px-4 py-3 md:py-2.5">
        <span className={fieldLabel}>When</span>
        <input type="date" name="date" className={fieldControl} />
      </label>

      <span className="mx-4 h-px bg-ink/10 md:mx-0 md:my-2 md:h-auto md:w-px" />

      <label className="flex flex-1 flex-col gap-1 px-4 py-3 md:py-2.5">
        <span className={fieldLabel}>Travel style</span>
        <span className="relative">
          <select name="type" defaultValue="" className={fieldControl}>
            <option value="">Any style</option>
            {getAllTags().map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-storm/50"
          />
        </span>
      </label>

      <button
        type="submit"
        className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-gold px-7 font-medium text-abyss transition-colors duration-200 hover:bg-gold-deep md:mt-0 md:rounded-full"
      >
        <Search className="h-4 w-4" aria-hidden="true" />
        Search
      </button>
    </form>
  );
}
