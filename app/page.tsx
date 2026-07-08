import Hero from "@/components/Hero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Testimonials from "@/components/Testimonials";
import TrendingTours from "@/components/TrendingTours";
import ValueProps from "@/components/ValueProps";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrendingTours />
        <ValueProps />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
