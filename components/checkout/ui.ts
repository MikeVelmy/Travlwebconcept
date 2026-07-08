export const labelClass =
  "block text-xs font-medium uppercase tracking-[0.18em] text-ink";

export const inputClass =
  "mt-2 w-full rounded-lg border border-ink/15 bg-white px-3.5 py-3 text-base text-ink placeholder:text-storm/40 focus:border-gold-deep focus:outline-none";

export const formatMoney = (amount: number): string =>
  `$${amount.toLocaleString("en-US")}`;
