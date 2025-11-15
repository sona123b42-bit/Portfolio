"use client";
import Skill from "./_components/skill";
import Hero from "./_components/hero";
import About from "./_components/About";
import Portfolio from "./_components/Portfolio";
import Contact from "./_components/Contact";
import useUrlSectionUpdater from "./_components/useUrlSectionUpdater";
function Page() {
  useUrlSectionUpdater(["hero", "about", "skills", "portfolio", "contact"]);
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  );
}
export default Page;
