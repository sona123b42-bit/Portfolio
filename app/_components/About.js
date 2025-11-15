import Image from "next/image";
import photoHero from "@/public/hero.png";
export default function About() {
  return (
    <section id="about" className="w-full bg-slate-100 pt-20 z-10 relative">
      <div className="max-w-7xl mx-auto md:px-20 lg:px-0">
        <div className="relative flex flex-col lg:flex-row bg-white items-center rounded-2xl shadow-lg overflow-hidden p-10 lg:p-16 gap-10 lg:gap-16 translate-y-20">
          <div className="flex justify-center lg:justify-start lg:pl-20">
            <Image
              src={photoHero}
              alt="Portrait photo"
              width={320}
              height={320}
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 max-w-lg lg:pl-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              I am a Professional Web Developer
            </h1>

            <p className="text-gray-600 lg:text-lg leading-relaxed">
              I’m a 20-year-old web developer based in Phnom Penh, Cambodia. I’m
              passionate about building clean, modern web applications and
              constantly improving my skills. With experience in both front-end
              and back-end development, I’m confident in delivering high-quality
              work and open to freelance or contract projects with clients
              around the world.
            </p>

            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start w-full">
              <a
                href="#contact"
                className="bg-blue-500 text-white px-10 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors w-full lg:w-auto text-center"
              >
                Contact me
              </a>
              <a
                href="/Sona-CV.pdf"
                download
                className="border border-slate-300 text-slate-600 px-10 py-3 rounded-md text-lg hover:bg-slate-100 transition-colors w-full lg:w-auto text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
