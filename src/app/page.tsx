import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { GlovoDelivery } from "@/components/sections/GlovoDelivery";
import { Features } from "@/components/sections/Features";
import { SpecialEvents } from "@/components/sections/SpecialEvents";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <GlovoDelivery />
        <Features />
        <SpecialEvents />
      </main>
      <Footer />
    </>
  );
}
