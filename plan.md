# Real-World Travel & Tour Agency Blueprint

## Core Business Objectives
- High-Conversion UI: Focus heavily on immersive visual storytelling to drive travel inquiries.
- Frictionless Booking: Provide intuitive search, clear itinerary breakdowns, and a seamless multi-step reservation funnel.

## Project Tech Stack
- Framework: Next.js (App Router, static & dynamic rendering mix)
- Language: TypeScript (Strict type-safety for bookings and search parameters)
- Styling: Tailwind CSS (Modern, fluid layouts; clean whitespace; elegant animations)
- State Management: React Context (for tracking ongoing user booking selections)
- Icons: Lucide React

---

## Site Architecture & Core Features

### 1. Home Page / Conversion Hub (`app/page.tsx`)
- **Immersive Hero Section:** Full-screen high-resolution destination backdrops with an integrated multi-parameter search bar:
  * Destination (Text input / Dropdown)
  * Travel Date (Calendar picker)
  * Trip Type (Adventure, Luxury, Family, Beach)
- **Trending Destinations:** High-impact grid layout highlighting top global tour packages with live pricing and review badges.
- **Value Props:** Minimalist grid showcasing trust factors ("Vetted Local Guides", "Flexible Cancellations", "100% Tailored Itineraries").
- **Testimonial Section:** Visual carousel of client reviews, complete with trip locations and star ratings.

### 2. Live Directory / Advanced Search (`app/tours/page.tsx`)
- **Split-Pane UI layout:** 
  * **Sidebar Filters:** Interactive controls for price range sliding, trip duration, difficulty levels, and travel styles.
  * **Results Grid:** Dynamic display of responsive Tour Cards updating in real-time based on filter criteria.
- **Tour Card Component:** Visual badge tags, title, duration (e.g., "9 Days / 8 Nights"), dynamic pricing counter, and CTA button.

### 3. Comprehensive Itinerary Detail Page (`app/tours/[id]/page.tsx`)
- **Dynamic Routing:** Individual page generated for each tour package.
- **Rich Media Banner:** Prominent gallery view showcasing the destination.
- **Interactive Day-by-Day Timeline:** Tabbed or accordion layout detailing the exact schedule (Day 1: Arrival & Welcome Dinner, Day 2: City Tour, etc.).
- **What’s Included Grid:** Clear visual separation using checkmarks and crosses for inclusions (Flights, Hotels, Meals) vs. exclusions (Insurance, Personal expenses).
- **Sticky Booking Sidebar:** Floating panel tracking pricing per person, guest count modifier, and a direct "Book This Trip" call-to-action.

### 4. Secure Checkout / Booking Funnel (`app/checkout/page.tsx`)
- **Multi-Step Checkout Sequence:**
  * **Step 1: Traveler Details:** Forms capturing lead passenger and companion data.
  * **Step 2: Add-Ons & Upgrades:** Optional toggles for single-room supplements, airport transfers, or premium insurance.
  * **Step 3: Summary & Secure Mock Payment:** Final pricing invoice line items and custom mock payment processing layout.

---

## Mock Data Architecture (`data/tours.ts`)
Maintain a highly realistic array of Tour objects. Each object must include:
- `id` (string)
- `title`, `location`, and `description` (strings)
- `pricePerPerson` (number)
- `durationDays` (number)
- `images` (array of strings)
- `tags` (array of categories like 'Luxury', 'Adventure')
- `rating` & `reviewsCount` (numbers)
- `itinerary` (array of `{ day: number, title: string, description: string }`)
- `inclusions` & `exclusions` (arrays of strings)
-
