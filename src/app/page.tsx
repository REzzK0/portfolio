import { Cases } from "@/components/Cases";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Page() {
  return (
    <main>
      <Hero />
      <Services />
      <Cases />
      <Process />
      <Contact />
    </main>
  );
}
