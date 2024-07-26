import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main>
      <Header /> 
      <Hero />
      <About />
      <Skills/>
    </main>
  );
}
