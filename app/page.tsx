import NavShell from "@/components/NavShell";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-white selection:bg-[#4A1942] selection:text-white">
      <NavShell>
        <Hero />
      </NavShell>
      <WorkSection />
      <TestimonialSection />
      <ContactFormSection />
    </main>
  );
}