import Skill from "./_components/skill";
import Hero from "./_components/hero";
import About from "./_components/About";
import Portfolio from "./_components/Portfolio";
import Contact from "./_components/Contact";
function page() {
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
export default page;
