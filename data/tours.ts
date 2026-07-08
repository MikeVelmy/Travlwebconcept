export type TourTag = "Luxury" | "Adventure" | "Family" | "Beach" | "Cultural";

export type Difficulty = "Easy" | "Moderate" | "Challenging";

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Tour {
  id: string;
  title: string;
  location: string;
  description: string;
  pricePerPerson: number;
  durationDays: number;
  images: string[];
  tags: TourTag[];
  difficulty: Difficulty;
  rating: number;
  reviewsCount: number;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
}

const img = (id: string): string =>
  `https://images.unsplash.com/${id}?q=80&w=1920&auto=format&fit=crop`;

export const tours: Tour[] = [
  {
    id: "santorini-sunset-serenade",
    title: "Santorini Sunset Serenade",
    location: "Santorini, Greece",
    description:
      "Drift through whitewashed villages perched above the Aegean caldera on this indulgent island escape. Private catamaran cruises, volcanic-sand beaches, cliffside wine tastings, and the world's most photographed sunsets in Oia — all anchored from a boutique cave-suite hotel.",
    pricePerPerson: 2890,
    durationDays: 7,
    images: [
      img("photo-1570077188670-e3a8d69ac5ff"),
      img("photo-1613395877344-13d4a8e0d49e"),
      img("photo-1601581875039-e899893d520c"),
      img("photo-1560703650-ef3e0f254ae0"),
    ],
    tags: ["Luxury", "Beach"],
    difficulty: "Easy",
    rating: 4.9,
    reviewsCount: 312,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Caldera Welcome Dinner",
        description:
          "Private transfer to your cave suite in Imerovigli, followed by a sunset welcome dinner overlooking the caldera rim.",
      },
      {
        day: 2,
        title: "Oia Village & Blue Domes Walk",
        description:
          "Guided morning stroll through Oia's marble lanes and iconic blue-domed chapels, with a long lazy lunch at Ammoudi Bay's fish tavernas.",
      },
      {
        day: 3,
        title: "Private Catamaran Cruise",
        description:
          "Full-day catamaran sail around the caldera with swim stops at the hot springs, Red Beach, and White Beach — onboard BBQ and open bar included.",
      },
      {
        day: 4,
        title: "Volcanic Vineyards & Wine Tasting",
        description:
          "Visit three historic wineries to taste Assyrtiko grown in volcanic soil, paired with local cheeses and cliffside views over Kamari.",
      },
      {
        day: 5,
        title: "Akrotiri Ruins & Beach Afternoon",
        description:
          "Explore the preserved Bronze Age city of Akrotiri with an archaeologist guide, then unwind on the black sands of Perissa.",
      },
      {
        day: 6,
        title: "Fira to Oia Caldera Hike",
        description:
          "Optional guided sunrise hike along the caldera-edge trail from Fira to Oia, followed by a free afternoon and farewell dinner in Pyrgos.",
      },
      {
        day: 7,
        title: "Slow Morning & Departure",
        description:
          "Champagne breakfast on your private terrace before your transfer to Santorini airport.",
      },
    ],
    inclusions: [
      "6 nights in a boutique cave-suite hotel",
      "Daily breakfast & 3 curated dinners",
      "Private catamaran cruise with open bar",
      "Wine tasting at 3 volcanic vineyards",
      "All airport & activity transfers",
      "English-speaking local host",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Lunches on free days",
      "Personal expenses & gratuities",
    ],
  },
  {
    id: "kyoto-cultural-odyssey",
    title: "Kyoto Cultural Odyssey",
    location: "Kyoto, Japan",
    description:
      "Step into Japan's ancient capital through vermilion torii tunnels, moss-carpeted temple gardens, and lantern-lit geisha districts. This immersive journey blends tea ceremonies, a night with maiko performers, and a ryokan stay with kaiseki dining.",
    pricePerPerson: 3150,
    durationDays: 8,
    images: [
      img("photo-1493976040374-85c8e12f0c0e"),
      img("photo-1545569341-9eb8b30979d9"),
      img("photo-1528360983277-13d401cdc186"),
      img("photo-1478436127897-769e1b3f0f36"),
    ],
    tags: ["Cultural"],
    difficulty: "Easy",
    rating: 4.8,
    reviewsCount: 268,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kyoto",
        description:
          "Bullet-train arrival from Osaka or Tokyo, check-in at a machiya townhouse hotel, and an evening orientation walk through Pontocho Alley.",
      },
      {
        day: 2,
        title: "Fushimi Inari & Southern Temples",
        description:
          "Early-morning climb through the 10,000 torii gates of Fushimi Inari before the crowds, then on to Tofuku-ji's Zen gardens.",
      },
      {
        day: 3,
        title: "Arashiyama Bamboo Grove & River Cruise",
        description:
          "Wander the towering bamboo forest, visit Tenryu-ji temple, and drift down the Hozugawa River on a traditional flat-bottomed boat.",
      },
      {
        day: 4,
        title: "Tea Ceremony & Kimono Experience",
        description:
          "A formal tea ceremony hosted by a tea master in a 200-year-old teahouse, followed by an afternoon exploring Higashiyama in kimono.",
      },
      {
        day: 5,
        title: "Golden Pavilion & Zen Meditation",
        description:
          "Morning visit to Kinkaku-ji's golden reflection pond, then a private zazen meditation session with monks at a working Zen temple.",
      },
      {
        day: 6,
        title: "Nara Day Trip",
        description:
          "Day excursion to Nara to meet the bowing deer of Nara Park and stand beneath the Great Buddha of Todai-ji.",
      },
      {
        day: 7,
        title: "Gion & an Evening with Maiko",
        description:
          "Craft workshop with a knife maker in Nishiki Market, then an exclusive evening of dance, games, and conversation with a maiko in Gion.",
      },
      {
        day: 8,
        title: "Ryokan Morning & Departure",
        description:
          "Final kaiseki breakfast at your ryokan and onsen soak before your departure transfer.",
      },
    ],
    inclusions: [
      "7 nights (machiya hotel + ryokan)",
      "Daily breakfast & 2 kaiseki dinners",
      "Private tea ceremony & maiko evening",
      "All rail passes & city transport",
      "Expert cultural guide throughout",
      "Nara day trip with entrance fees",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Most lunches & dinners",
      "Personal shopping & gratuities",
    ],
  },
  {
    id: "patagonia-wild-frontiers",
    title: "Patagonia Wild Frontiers Trek",
    location: "Torres del Paine, Chile",
    description:
      "Trek beneath granite spires, electric-blue glaciers, and condor-filled skies on the legendary W Circuit. This expedition-grade adventure pairs full days on the trail with cozy eco-camp nights, gaucho asados, and a boat crossing beneath Glacier Grey.",
    pricePerPerson: 4280,
    durationDays: 10,
    images: [
      img("photo-1478827536114-da961b7f86d2"),
      img("photo-1519681393784-d120267933ba"),
      img("photo-1506905925346-21bda4d32df4"),
      img("photo-1469474968028-56623f02e42e"),
    ],
    tags: ["Adventure"],
    difficulty: "Challenging",
    rating: 4.9,
    reviewsCount: 187,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Punta Arenas",
        description:
          "Meet your expedition leader and group for a briefing and welcome dinner of Magellanic king crab.",
      },
      {
        day: 2,
        title: "Transfer to Torres del Paine",
        description:
          "Scenic overland journey via Puerto Natales into the national park, with your first views of the Paine Massif.",
      },
      {
        day: 3,
        title: "Base of the Towers Hike",
        description:
          "The classic 19 km round-trip ascent through Ascencio Valley to the glacial lake beneath the three granite towers.",
      },
      {
        day: 4,
        title: "Recovery Day & Wildlife Safari",
        description:
          "Gentle morning tracking guanacos, foxes, and — with luck — pumas with a wildlife guide, followed by an afternoon asado.",
      },
      {
        day: 5,
        title: "French Valley Ascent",
        description:
          "Hike into the amphitheater of the French Valley, surrounded by hanging glaciers and the roar of distant avalanches.",
      },
      {
        day: 6,
        title: "Grey Glacier Trek & Boat Crossing",
        description:
          "Walk the western leg of the W to Grey Lake, then cruise past towering blue icebergs to the glacier's face.",
      },
      {
        day: 7,
        title: "Kayaking Among Icebergs",
        description:
          "Optional guided sea-kayak session on Grey Lake or a rest day at camp with guided nature walks.",
      },
      {
        day: 8,
        title: "Pehoé Lake & Salto Grande",
        description:
          "Shorter hikes to the thundering Salto Grande waterfall and the Cuernos viewpoint over turquoise Lake Pehoé.",
      },
      {
        day: 9,
        title: "Estancia Day & Farewell Asado",
        description:
          "Ride or walk with baqueano horsemen at a working Patagonian estancia, capped by a lamb asado farewell feast.",
      },
      {
        day: 10,
        title: "Return & Departure",
        description:
          "Morning transfer back to Punta Arenas for onward flights.",
      },
    ],
    inclusions: [
      "9 nights (hotels + eco-camp domes)",
      "All meals during the trek",
      "Certified mountain guides (1:6 ratio)",
      "Park entrance fees & permits",
      "Grey Lake glacier navigation",
      "All overland transfers",
    ],
    exclusions: [
      "International & domestic flights",
      "Travel insurance (mandatory)",
      "Kayak session (optional add-on)",
      "Sleeping bag rental & tips",
    ],
  },
  {
    id: "bali-family-discovery",
    title: "Bali Family Discovery",
    location: "Bali, Indonesia",
    description:
      "A nine-day island adventure engineered for all ages: jungle swings and rice-terrace treasure hunts in Ubud, gentle surf lessons on Seminyak's sands, a volcano sunrise for the early risers, and plenty of pool-villa downtime in between.",
    pricePerPerson: 1980,
    durationDays: 9,
    images: [
      img("photo-1537996194471-e657df975ab4"),
      img("photo-1512100356356-de1b84283e18"),
      img("photo-1518548419970-58e3b4079ab2"),
      img("photo-1544644181-1484b3fdfc62"),
    ],
    tags: ["Family", "Beach"],
    difficulty: "Easy",
    rating: 4.7,
    reviewsCount: 421,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Villa Check-in",
        description:
          "Private airport pickup and check-in at your family pool villa in Ubud, with a welcome flower-garland ceremony for the kids.",
      },
      {
        day: 2,
        title: "Rice Terraces & Jungle Swing",
        description:
          "Morning treasure-hunt walk through the Tegallalang rice terraces, then jungle swings and a picnic overlooking the Ayung Valley.",
      },
      {
        day: 3,
        title: "Monkey Forest & Batik Workshop",
        description:
          "Meet the long-tailed macaques of Ubud's Sacred Monkey Forest, then create your own batik prints in a family art class.",
      },
      {
        day: 4,
        title: "White-Water Rafting (Family Grade)",
        description:
          "Gentle class II rafting down the Ayung River — safe for ages 7+ — with waterfalls and rainforest canyons en route.",
      },
      {
        day: 5,
        title: "Mount Batur Sunrise or Sleep-in",
        description:
          "Optional pre-dawn jeep ride up Mount Batur for a crater sunrise, or a slow villa morning before hot springs for everyone.",
      },
      {
        day: 6,
        title: "Transfer to Seminyak Beach",
        description:
          "Move to a beachfront resort in Seminyak with an afternoon of pool time and a beach BBQ dinner.",
      },
      {
        day: 7,
        title: "Learn-to-Surf Morning",
        description:
          "Private family surf lesson on Seminyak's forgiving beach break, followed by smoothie bowls and a sandcastle competition.",
      },
      {
        day: 8,
        title: "Uluwatu Temple & Kecak Fire Dance",
        description:
          "Sunset visit to the clifftop Uluwatu temple and the hypnotic Kecak fire dance performance above the crashing waves.",
      },
      {
        day: 9,
        title: "Beach Morning & Departure",
        description:
          "One last swim before your private transfer to Denpasar airport.",
      },
    ],
    inclusions: [
      "8 nights (pool villa + beach resort)",
      "Daily breakfast & 3 family dinners",
      "Private driver & air-con vehicle",
      "Surf lesson, rafting & all activities",
      "Kids' welcome pack & babysitting credit",
      "All entrance fees",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Mount Batur sunrise jeep (optional)",
      "Lunches & personal expenses",
    ],
  },
  {
    id: "sahara-starlight-expedition",
    title: "Sahara Starlight Expedition",
    location: "Marrakech & Merzouga, Morocco",
    description:
      "From the sensory maze of Marrakech's souks, cross the High Atlas to sleep beneath a blanket of stars in a luxury desert camp. Camel caravans at dusk, Berber drum circles by firelight, and kasbahs that starred in a hundred films.",
    pricePerPerson: 1640,
    durationDays: 6,
    images: [
      img("photo-1489749798305-4fea3ae63d43"),
      img("photo-1509316785289-025f5b846b35"),
      img("photo-1539020140153-e479b8c22e70"),
      img("photo-1597212618440-806262de4f6b"),
    ],
    tags: ["Adventure", "Cultural"],
    difficulty: "Moderate",
    rating: 4.8,
    reviewsCount: 356,
    itinerary: [
      {
        day: 1,
        title: "Marrakech Medina Immersion",
        description:
          "Check into a restored riad, then dive into the souks and Jemaa el-Fnaa square with a local storyteller as dusk falls.",
      },
      {
        day: 2,
        title: "High Atlas Crossing & Aït Benhaddou",
        description:
          "Wind over the Tizi n'Tichka pass to the UNESCO-listed mud-brick kasbah of Aït Benhaddou, overnighting in Ouarzazate.",
      },
      {
        day: 3,
        title: "Todra Gorge & Desert Approach",
        description:
          "Walk the 300-metre canyon walls of Todra Gorge, then continue through palm oases to the edge of the Erg Chebbi dunes.",
      },
      {
        day: 4,
        title: "Camel Trek & Luxury Desert Camp",
        description:
          "Sunset camel caravan into the dunes to your private camp — Berber drums, tagine dinner, and stargazing with a night-sky guide.",
      },
      {
        day: 5,
        title: "Dune Sunrise & Return via Draa Valley",
        description:
          "Sandboard the dunes at dawn, then journey back through the million-palm Draa Valley to Marrakech.",
      },
      {
        day: 6,
        title: "Hammam & Departure",
        description:
          "Traditional hammam and mint tea farewell before your airport transfer.",
      },
    ],
    inclusions: [
      "5 nights (riads + luxury desert camp)",
      "Daily breakfast & 4 dinners",
      "4x4 with private driver-guide",
      "Camel trek & sandboarding",
      "Stargazing session with astronomer",
      "Hammam spa ritual",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Lunches",
      "Souk purchases & gratuities",
    ],
  },
  {
    id: "swiss-alps-grand-panorama",
    title: "Swiss Alps Grand Panorama",
    location: "Zermatt & Interlaken, Switzerland",
    description:
      "Glide across glaciers aboard panoramic trains, breakfast beneath the Matterhorn, and paraglide over turquoise lakes. This first-class alpine journey strings together Switzerland's most spectacular rail lines, summits, and five-star chalet hotels.",
    pricePerPerson: 4950,
    durationDays: 8,
    images: [
      img("photo-1530122037265-a5f1f91d3b99"),
      img("photo-1527668752968-14dc70a27c95"),
      img("photo-1476514525535-07fb3b4ae5f1"),
      img("photo-1502786129293-79981df4e689"),
    ],
    tags: ["Luxury", "Adventure"],
    difficulty: "Moderate",
    rating: 4.9,
    reviewsCount: 203,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zurich & Lucerne Transfer",
        description:
          "First-class rail from Zurich airport to lakeside Lucerne, with an evening old-town walk beneath the Chapel Bridge.",
      },
      {
        day: 2,
        title: "Mount Pilatus Golden Round Trip",
        description:
          "Ascend Pilatus by the world's steepest cogwheel railway, descend by panoramic gondola, and cruise back across Lake Lucerne.",
      },
      {
        day: 3,
        title: "GoldenPass Line to Interlaken",
        description:
          "Ride the GoldenPass panoramic train through emerald valleys to Interlaken, checking into a grand Victorian spa hotel.",
      },
      {
        day: 4,
        title: "Jungfraujoch — Top of Europe",
        description:
          "Rail journey through the Eiger to the 3,454 m Jungfraujoch saddle, with the Aletsch Glacier stretching beneath the Sphinx observatory.",
      },
      {
        day: 5,
        title: "Paragliding & Lake Brienz",
        description:
          "Tandem paraglide from Beatenberg over the lakes (or a lake cruise alternative), then a lazy afternoon in Brienz's woodcarving village.",
      },
      {
        day: 6,
        title: "Glacier Express to Zermatt",
        description:
          "The full Glacier Express experience — 291 bridges and 91 tunnels — in Excellence Class with plated lunch and champagne.",
      },
      {
        day: 7,
        title: "Gornergrat & Matterhorn Views",
        description:
          "Sunrise cogwheel ride to Gornergrat's 3,089 m platform facing the Matterhorn, with an alpine hike down to Riffelalp for fondue.",
      },
      {
        day: 8,
        title: "Departure via Zurich",
        description:
          "Scenic morning rail connection back to Zurich airport.",
      },
    ],
    inclusions: [
      "7 nights in 4–5 star alpine hotels",
      "Daily breakfast & 3 signature dinners",
      "First-class Swiss Travel Pass",
      "Glacier Express Excellence Class",
      "Jungfraujoch & Gornergrat tickets",
      "Tandem paragliding flight",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Most lunches & dinners",
      "Personal expenses",
    ],
  },
  {
    id: "maldives-overwater-hideaway",
    title: "Maldives Overwater Hideaway",
    location: "South Malé Atoll, Maldives",
    description:
      "Five days of barefoot luxury in an overwater villa with a glass floor and private infinity pool. Snorkel house reefs teeming with mantas, dine beneath the ocean's surface, and let the resort's dedicated butler handle absolutely everything else.",
    pricePerPerson: 5420,
    durationDays: 5,
    images: [
      img("photo-1514282401047-d79a71a590e8"),
      img("photo-1573843981267-be1999ff37cd"),
      img("photo-1540202404-a2f29016b523"),
      img("photo-1544551763-46a013bb70d5"),
    ],
    tags: ["Luxury", "Beach"],
    difficulty: "Easy",
    rating: 5.0,
    reviewsCount: 149,
    itinerary: [
      {
        day: 1,
        title: "Seaplane Arrival & Villa Welcome",
        description:
          "A 25-minute scenic seaplane hop from Malé to your resort, champagne check-in, and a sunset swim in your private pool.",
      },
      {
        day: 2,
        title: "House Reef Snorkel Safari",
        description:
          "Guided snorkel along the house reef's coral gardens with a marine biologist — turtles, eagle rays, and reef sharks are regulars.",
      },
      {
        day: 3,
        title: "Sandbank Picnic & Spa Afternoon",
        description:
          "Private dhoni cruise to a deserted sandbank for a chef-prepared picnic, then a couples' treatment at the overwater spa.",
      },
      {
        day: 4,
        title: "Manta Point & Underwater Dinner",
        description:
          "Morning excursion to a manta cleaning station, ending with a seven-course dinner in the resort's underwater restaurant.",
      },
      {
        day: 5,
        title: "Sunrise Yoga & Departure",
        description:
          "Overwater yoga at first light and a final glass-floor breakfast before your seaplane back to Malé.",
      },
    ],
    inclusions: [
      "4 nights in an overwater pool villa",
      "Return seaplane transfers",
      "Full-board dining plan",
      "Underwater restaurant dinner",
      "Guided snorkel & manta excursions",
      "Dedicated villa butler",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Premium beverages",
      "Scuba diving & motorized water sports",
    ],
  },
  {
    id: "inca-trail-machu-picchu",
    title: "Inca Trail to Machu Picchu",
    location: "Cusco & Sacred Valley, Peru",
    description:
      "Follow original Inca stonework over cloud-forest passes to arrive at Machu Picchu through the Sun Gate at dawn — the way pilgrims did 500 years ago. Acclimatization days in Cusco and the Sacred Valley ease you to altitude before the classic four-day trail.",
    pricePerPerson: 2340,
    durationDays: 7,
    images: [
      img("photo-1526392060635-9d6019884377"),
      img("photo-1587595431973-160d0d94add1"),
      img("photo-1553913861-c0fddf2619ee"),
      img("photo-1501785888041-af3ef285b470"),
    ],
    tags: ["Adventure", "Cultural"],
    difficulty: "Challenging",
    rating: 4.8,
    reviewsCount: 294,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cusco",
        description:
          "Gentle arrival day at 3,400 m with coca tea, a plaza walking tour, and an early night to begin acclimatizing.",
      },
      {
        day: 2,
        title: "Sacred Valley & Ollantaytambo",
        description:
          "Explore the Pisac market and terraced fortress of Ollantaytambo, sleeping lower in the valley to aid acclimatization.",
      },
      {
        day: 3,
        title: "Inca Trail Day 1 — Km 82 to Wayllabamba",
        description:
          "Cross the Urubamba River and follow gentle river terrain past the ruins of Llactapata to your first camp.",
      },
      {
        day: 4,
        title: "Inca Trail Day 2 — Dead Woman's Pass",
        description:
          "The big one: a steady climb to the trail's 4,215 m high point before descending into the Pacaymayo valley camp.",
      },
      {
        day: 5,
        title: "Inca Trail Day 3 — Cloud Forest Ruins",
        description:
          "The most beautiful day, traversing Runkurakay, Sayacmarca, and Phuyupatamarca before camping above the treeline at Wiñay Wayna.",
      },
      {
        day: 6,
        title: "Sun Gate Dawn & Machu Picchu",
        description:
          "Pre-dawn walk to Inti Punku for first light over Machu Picchu, then a full guided tour of the citadel before the train to Aguas Calientes.",
      },
      {
        day: 7,
        title: "Return to Cusco & Departure",
        description:
          "Scenic Vistadome train and drive back to Cusco for celebration pisco sours and onward travel.",
      },
    ],
    inclusions: [
      "6 nights (hotels + full trek camping)",
      "All trek meals by expedition chef",
      "Inca Trail permits & Machu Picchu entry",
      "Porters carrying group equipment",
      "Vistadome panoramic return train",
      "Bilingual licensed trail guides",
    ],
    exclusions: [
      "International flights",
      "Travel insurance (mandatory)",
      "Sleeping bag & trekking pole rental",
      "Tips for guides & porters",
    ],
  },
  {
    id: "serengeti-luxury-safari",
    title: "Serengeti Luxury Safari",
    location: "Serengeti & Ngorongoro, Tanzania",
    description:
      "Chase the Great Migration across endless golden plains by day and fall asleep to lion calls from your tented suite by night. Expert trackers, open-top Land Cruisers, a dawn balloon flight, and the wildlife spectacle of the Ngorongoro Crater.",
    pricePerPerson: 6180,
    durationDays: 7,
    images: [
      img("photo-1516426122078-c23e76319801"),
      img("photo-1523805009345-7448845a9e53"),
      img("photo-1547471080-7cc2caa01a7e"),
      img("photo-1535941339077-2dd1c7963098"),
    ],
    tags: ["Luxury", "Family", "Adventure"],
    difficulty: "Easy",
    rating: 4.9,
    reviewsCount: 176,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Meet your safari guide at Kilimanjaro airport and rest at a coffee-plantation lodge beneath Mount Meru.",
      },
      {
        day: 2,
        title: "Tarangire Elephant Herds",
        description:
          "First game drive among Tarangire's baobab forests and its famously large elephant herds, picnicking in the bush.",
      },
      {
        day: 3,
        title: "Ngorongoro Crater Descent",
        description:
          "Full day inside the crater's 260 km² natural amphitheater — big five territory with the world's densest lion population.",
      },
      {
        day: 4,
        title: "Into the Serengeti",
        description:
          "Cross the highlands into the Serengeti, game-driving en route to your luxury tented camp in migration country.",
      },
      {
        day: 5,
        title: "Hot-Air Balloon & Migration Tracking",
        description:
          "Dawn balloon flight over the plains with champagne bush breakfast, then an afternoon following the wildebeest columns.",
      },
      {
        day: 6,
        title: "Full Serengeti Day & Maasai Visit",
        description:
          "Sunrise-to-sunset game drives targeting big cats, plus a respectful visit to a Maasai boma to meet community elders.",
      },
      {
        day: 7,
        title: "Bush Airstrip Departure",
        description:
          "A final dawn drive to the airstrip and light-aircraft hop back to Arusha for onward flights.",
      },
    ],
    inclusions: [
      "6 nights in luxury lodges & tented camps",
      "All meals, drinks & laundry on safari",
      "Private 4x4 with pop-up roof & guide",
      "Hot-air balloon safari with breakfast",
      "All park & crater fees",
      "Internal bush flight",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Tanzania visa fees",
      "Guide gratuities",
    ],
  },
  {
    id: "iceland-ring-road-explorer",
    title: "Iceland Ring Road Explorer",
    location: "Reykjavík & Ring Road, Iceland",
    description:
      "Circle the entire island on an eight-day chase of waterfalls, black-sand beaches, glacier lagoons, and — in season — the northern lights. Small-group travel in a 4x4 minibus with a geologist guide who knows every hot spring worth stopping for.",
    pricePerPerson: 3420,
    durationDays: 8,
    images: [
      img("photo-1504893524553-b855bce32c67"),
      img("photo-1476610182048-b716b8518aae"),
      img("photo-1529963183134-61a90db47eaf"),
      img("photo-1470071459604-3b5ec3a7fe05"),
    ],
    tags: ["Adventure", "Family"],
    difficulty: "Moderate",
    rating: 4.7,
    reviewsCount: 231,
    itinerary: [
      {
        day: 1,
        title: "Reykjavík Arrival & Sky Lagoon",
        description:
          "Airport pickup, a soak in the oceanside Sky Lagoon's seven-step ritual, and a welcome dinner of Icelandic lamb.",
      },
      {
        day: 2,
        title: "Golden Circle",
        description:
          "Þingvellir's rift valley, the erupting Strokkur geyser, and the double cascade of Gullfoss — Iceland's greatest hits in one loop.",
      },
      {
        day: 3,
        title: "South Coast Waterfalls & Black Sands",
        description:
          "Walk behind Seljalandsfoss, feel the spray of Skógafoss, and stand among the basalt columns of Reynisfjara's black beach.",
      },
      {
        day: 4,
        title: "Glacier Hike & Jökulsárlón Lagoon",
        description:
          "Crampon-equipped glacier walk on Vatnajökull's tongue, then icebergs and seals at the Jökulsárlón lagoon and Diamond Beach.",
      },
      {
        day: 5,
        title: "East Fjords Slow Road",
        description:
          "Wind through fishing villages and reindeer country along the fjord-cut east coast to Egilsstaðir.",
      },
      {
        day: 6,
        title: "Lake Mývatn & Dettifoss",
        description:
          "Europe's most powerful waterfall, boiling mud pots at Hverir, and a steam bath at the Mývatn Nature Baths.",
      },
      {
        day: 7,
        title: "Akureyri & Whale Watching",
        description:
          "Morning whale-watching cruise on Eyjafjörður — humpbacks near-guaranteed — before the scenic run back toward the capital.",
      },
      {
        day: 8,
        title: "Reykjavík & Departure",
        description:
          "Free morning for the old harbour and Hallgrímskirkja tower before your airport transfer.",
      },
    ],
    inclusions: [
      "7 nights in country hotels & guesthouses",
      "Daily breakfast & 3 dinners",
      "4x4 minibus with geologist guide",
      "Glacier hike with all equipment",
      "Whale-watching cruise & lagoon entries",
      "Northern lights wake-up call (Sep–Apr)",
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Most lunches & dinners",
      "Optional ice-cave add-on",
    ],
  },
];

export function getTourById(id: string): Tour | undefined {
  return tours.find((tour) => tour.id === id);
}

export function getAllTags(): TourTag[] {
  return ["Adventure", "Luxury", "Family", "Beach", "Cultural"];
}
