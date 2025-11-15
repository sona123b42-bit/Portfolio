import Image from "next/image";
import photoHero from "@/public/hero.png";
export default function Hero() {
  return (
    <section id="hero" className="p-6 md:mb-0 bg-slate-100 w-full">
      <div className="flex flex-col-reverse md:flex-row max-w-[90rem] items-center justify-between mx-auto">
        <div className="flex flex-col space-y-10 lg:mb-16 md:w-1/2 justify-between items-center mt-24 max-w-7xl">
          <div className="flex flex-col items-center md:items-start max-w-md w-full space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left">
              Hello, I am Va Sona
            </h1>

            <p className="text-center text-2xl md:text-left text-gray-600">
              A front-end and back-end web developer who builds modern,
              responsive, and user-friendly applications.
            </p>

            <a
              href="#contact"
              className="bg-blue-500 text-white px-14 py-3 rounded-md text-2xl hover:bg-blue-600 transition-colors w-full md:w-auto text-center"
            >
              Contact me
            </a>
          </div>
        </div>
        <div className="mx-auto md:w-1/2 flex justify-center rounded-lg">
          <Image
            src={photoHero}
            alt="Hero photo"
            width={400}
            height={400}
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
