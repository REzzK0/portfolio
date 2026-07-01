import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Ticker } from "@/components/Ticker";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F3E8D8] text-[#1C120A]">
      <Header />
      <Hero />
      <Ticker />
      <Services />
      <Cases />
      <Process />
      <Contact />
    </main>
  );
}
