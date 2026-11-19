import About from "@/components/About";
import Building from "@/components/Building";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import SideRail from "@/components/SideRail";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <>
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-violet focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-violet"
      >
        Skip to content
      </a>

      <Nav />
      <SideRail />

      <div
        aria-hidden
        className="vignette pointer-events-none fixed inset-0 z-0 h-[70vh]"
      />

      <main className="relative z-10 lg:pl-14">
        <Hero />
        <Quote />
        <Building />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>

      <div className="relative z-10 lg:pl-14">
        <Footer />
      </div>
    </>
  );
}
