import Link from "next/link";

export function MeridianMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="10" />
        <ellipse cx="16" cy="16" rx="4.4" ry="10" />
        <path d="M6 16h20" />
      </g>
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="Your Company's Name — home"
    >
      <MeridianMark className="h-7 w-7 text-gold" />
      <span className="font-display text-lg tracking-wide sm:text-xl">
        Your Company&rsquo;s Name
      </span>
    </Link>
  );
}
