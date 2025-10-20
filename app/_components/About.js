import Image from "next/image";
import photoHero from "@/public/hero.png";
export default function About() {
  return (
    <section id="about" className="w-full bg-slate-100 pt-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 ">
        <div className="relative flex flex-col md:flex-row bg-white items-center md:items-center rounded-2xl shadow-lg overflow-hidden p-10 md:p-16 gap-10 md:gap-16 translate-y-20">
          <div className="flex justify-center md:justify-start">
            <Image
              src={photoHero}
              alt="Portrait photo"
              width={320}
              height={320}
              className="rounded-xl object-cover"
            />
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-lg md:pl-10">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
              I am a Professional Web Developer
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              I’m a 20-year-old web developer based in Phnom Penh, Cambodia. I’m
              passionate about building clean, modern web applications and
              constantly improving my skills. With experience in both front-end
              and back-end development, I’m confident in delivering high-quality
              work and open to freelance or contract projects with clients
              around the world.
            </p>

            <div className="flex flex-row space-x-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="bg-blue-500 text-white px-10 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
              >
                Contact me
              </a>
              <a
                href="#"
                className="border border-slate-300 text-slate-600 px-10 py-3 rounded-md text-lg hover:bg-slate-100 transition-colors"
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
