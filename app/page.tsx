import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white selection:bg-[#4A1942] selection:text-white">
      <Navbar />
      <Hero />
      <WorkSection />
      <TestimonialSection />
    </main>
  );
}