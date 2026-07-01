import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { FlowDivider } from "@/components/FlowDivider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ScrollMotion } from "@/components/ScrollMotion";
import { Services } from "@/components/Services";
import { Ticker } from "@/components/Ticker";

export default function Page() {
  return (
    <main className="site-background min-h-screen overflow-hidden text-[#1C120A]">
      <Header />
      <ScrollMotion />
      <Hero />
      <Ticker />
      <Services />
      <FlowDivider label="от услуги к сценарию" side="right" />
      <Cases />
      <FlowDivider label="из идеи в запуск" side="left" />
      <Process />
      <FlowDivider label="первый шаг" side="right" />
      <Contact />
    </main>
  );
}
