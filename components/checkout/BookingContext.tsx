"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Tour } from "@/data/tours";

export const MAX_GUESTS = 12;

export interface LeadTraveler {
  fullName: string;
  email: string;
  phone: string;
}

export type AddOnId = "singleRoom" | "transfer" | "insurance";

export const addOnCatalog: Record<
  AddOnId,
  { label: string; description: string; price: number; per: "booking" | "traveler" }
> = {
  singleRoom: {
    label: "Private single room",
    description:
      "Skip the shared twin — a room of your own at every hotel and camp on the route.",
    price: 420,
    per: "booking",
  },
  transfer: {
    label: "Airport transfers",
    description:
      "A driver holding your name at arrivals, and a ride back for departure day.",
    price: 60,
    per: "traveler",
  },
  insurance: {
    label: "Premium travel insurance",
    description:
      "Medical, baggage, and trip-interruption cover for the full length of the journey.",
    price: 89,
    per: "traveler",
  },
};

export interface InvoiceLine {
  label: string;
  amount: number;
}

interface BookingContextValue {
  tour: Tour;
  guests: number;
  setGuests: (count: number) => void;
  lead: LeadTraveler;
  updateLead: (patch: Partial<LeadTraveler>) => void;
  companions: string[];
  setCompanion: (index: number, name: string) => void;
  addOns: Record<AddOnId, boolean>;
  toggleAddOn: (id: AddOnId) => void;
  lines: InvoiceLine[];
  total: number;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({
  tour,
  initialGuests,
  children,
}: {
  tour: Tour;
  initialGuests: number;
  children: ReactNode;
}) {
  const [guests, setGuestsRaw] = useState(initialGuests);
  const [lead, setLead] = useState<LeadTraveler>({
    fullName: "",
    email: "",
    phone: "",
  });
  const [companions, setCompanions] = useState<string[]>(
    Array.from({ length: initialGuests - 1 }, () => "")
  );
  const [addOns, setAddOns] = useState<Record<AddOnId, boolean>>({
    singleRoom: false,
    transfer: false,
    insurance: false,
  });

  const setGuests = useCallback((count: number) => {
    const next = Math.min(MAX_GUESTS, Math.max(1, count));
    setGuestsRaw(next);
    setCompanions((current) =>
      Array.from({ length: next - 1 }, (_, i) => current[i] ?? "")
    );
  }, []);

  const updateLead = useCallback((patch: Partial<LeadTraveler>) => {
    setLead((current) => ({ ...current, ...patch }));
  }, []);

  const setCompanion = useCallback((index: number, name: string) => {
    setCompanions((current) =>
      current.map((existing, i) => (i === index ? name : existing))
    );
  }, []);

  const toggleAddOn = useCallback((id: AddOnId) => {
    setAddOns((current) => ({ ...current, [id]: !current[id] }));
  }, []);

  const { lines, total } = useMemo(() => {
    const items: InvoiceLine[] = [
      {
        label: `${tour.title} × ${guests} ${guests === 1 ? "traveler" : "travelers"}`,
        amount: tour.pricePerPerson * guests,
      },
    ];
    (Object.keys(addOnCatalog) as AddOnId[]).forEach((id) => {
      if (!addOns[id]) return;
      const addOn = addOnCatalog[id];
      const amount =
        addOn.per === "traveler" ? addOn.price * guests : addOn.price;
      items.push({
        label:
          addOn.per === "traveler"
            ? `${addOn.label} × ${guests}`
            : addOn.label,
        amount,
      });
    });
    return {
      lines: items,
      total: items.reduce((sum, line) => sum + line.amount, 0),
    };
  }, [tour, guests, addOns]);

  const value: BookingContextValue = {
    tour,
    guests,
    setGuests,
    lead,
    updateLead,
    companions,
    setCompanion,
    addOns,
    toggleAddOn,
    lines,
    total,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking(): BookingContextValue {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used inside a BookingProvider");
  }
  return context;
}
