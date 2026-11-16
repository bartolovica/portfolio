import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { site } from "@/content/site";

export default function Home() {
  const hasAbout = Boolean(site.about && site.about.length > 0);
  const navItems = site.nav.filter((item) => item.id !== "about" || hasAbout);

  return (
    <>
      <Nav name={site.name} items={navItems} cvUrl={site.cvUrl} />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
