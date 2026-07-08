export interface Testimonial {
  quote: string;
  name: string;
  home: string;
  trip: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Our guide Elias knew every chapel keeper in Oia by name. We saw a Santorini that isn't on anyone's feed.",
    name: "Amara & Kofi Mensah",
    home: "Accra, Ghana",
    trip: "Santorini Sunset Serenade",
    stars: 5,
  },
  {
    quote:
      "Dead Woman's Pass nearly broke me, and the crew carried the morale as much as the gear. Walking through the Sun Gate at dawn — I cried.",
    name: "Daniel Osei",
    home: "London, UK",
    trip: "Inca Trail to Machu Picchu",
    stars: 5,
  },
  {
    quote:
      "Three kids under twelve and not a single 'I'm bored' in nine days. The rafting morning is still all they talk about at dinner.",
    name: "The Boateng Family",
    home: "Kumasi, Ghana",
    trip: "Bali Family Discovery",
    stars: 5,
  },
  {
    quote:
      "A leopard draped over a sausage tree before breakfast, champagne above the migration by nine. Worth every cent, twice over.",
    name: "Linda & George Appiah",
    home: "Toronto, Canada",
    trip: "Serengeti Luxury Safari",
    stars: 5,
  },
];
