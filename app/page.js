import photoHero from "@/public/hero.png";
import Image from "next/image";
import tools from "@/public/tool.png";
import FrontEnd from "@/public/front-end.png";
import Backend from "@/public/backend.png";
import {
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiPostman,
  SiSupabase,
  SiNpm,
  SiVercel,
  SiRender,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCssmodules,
  SiStyledcomponents,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiMysql,
  SiJsonwebtokens,
  SiAuth0,
  SiSwagger,
} from "react-icons/si";

function page() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col-reverse md:flex-row p-6 md:mb-0 bg-slate-100 w-full"
      >
        <div className="flex flex-col space-y-10 lg:mb-16 md:w-1/2 justify-between items-center mt-24 max-w-7xl">
          <div className="flex flex-col items-center md:items-start max-w-md w-full space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left">
              Hello, I am Va Sona
            </h1>

            <p className="text-center text-2xl md:text-left text-gray-600">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            <a
              href="#"
              className="bg-blue-500 text-white px-14 py-3 rounded-md text-2xl hover:bg-blue-600 transition-colors"
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
      </section>
      <section id="about" className="w-full bg-slate-100 pt-32 z-10 relative">
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
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:space-y-8 max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                I am a Professional Web Developer
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                I specialize in building responsive and high-performance web
                applications using modern tools like React, Next.js, and
                Node.js.
              </p>

              <a
                href="#"
                className="bg-blue-500 text-white px-10 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full pt-70 pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col justify-center md:justify-start md:w-1/2 space-y-6">
              <div className="flex items-center space-x-6 w-full border-b-2 pb-2">
                <Image
                  src={tools}
                  alt="tools icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <p className="text-4xl font-bold">Tools</p>
              </div>

              <div className="flex items-center space-x-6">
                <SiGit
                  className="text-[#F05032] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiGithub
                  className="text-[#181717] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiDocker
                  className="text-[#2496ED] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiFirebase
                  className="text-[#FFCA28] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiPostman
                  className="text-[#FF6C37] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiSupabase
                  className="text-[#3ECF8E] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiNpm
                  className="text-[#CB3837] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiVercel
                  className="text-[#000000] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiRender
                  className="text-[#46E3B7] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
              </div>
              <div className="flex items-center space-x-6 w-full border-b-2 pb-2 mt-10">
                <Image
                  src={FrontEnd}
                  alt="front-end icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <p className="text-4xl font-bold">Front-end</p>
              </div>
              <div className="flex items-center space-x-6">
                <SiHtml5
                  className="text-[#E34F26] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiCss3
                  className="text-[#1572B6] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiJavascript
                  className="text-[#F7DF1E] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiCssmodules
                  className="text-black hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiStyledcomponents
                  className="text-[#DB7093] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiTailwindcss
                  className="text-[#06B6D4] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiBootstrap
                  className="text-[#7952B3] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiRedux
                  className="text-[#764ABC] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiReact
                  className="text-[#61DAFB] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiNextdotjs
                  className="text-black hover:scale-110 transition-transform duration-200"
                  size={40}
                />
              </div>
              <div className="flex items-center space-x-6 w-full border-b-2 pb-2 mt-10">
                <Image
                  src={Backend}
                  alt="back-end icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <p className="text-4xl font-bold">Back-end</p>
              </div>
              <div className="flex items-center space-x-6">
                <SiNodedotjs
                  className="text-[#339933] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiExpress
                  className="text-black hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiMongodb
                  className="text-[#47A248] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiMongoose
                  className="text-[#880000] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiPostgresql
                  className="text-[#4169E1] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiMysql
                  className="text-[#4479A1] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiJsonwebtokens
                  className="text-black hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiAuth0
                  className="text-[#4285F4] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
                <SiSwagger
                  className="text-[#85EA2D] hover:scale-110 transition-transform duration-200"
                  size={40}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Leadership */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl mb-4">👑</span>
                <h3 className="text-xl font-semibold mb-2">Leadership</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Guiding teams and projects with strong decision-making,
                  collaboration, and vision to ensure efficiency and quality
                  results.
                </p>
              </div>

              {/* Research */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl mb-4">🔍</span>
                <h3 className="text-xl font-semibold mb-2">Research</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Conducting analysis and user studies to identify optimal
                  solutions and improve user experience before development.
                </p>
              </div>

              {/* Front-End */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl mb-4">🎨</span>
                <h3 className="text-xl font-semibold mb-2">Front-End</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Creating modern, responsive interfaces using React, Next.js,
                  Tailwind CSS, and Styled Components.
                </p>
              </div>

              {/* Back-End */}
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl mb-4">⚙️</span>
                <h3 className="text-xl font-semibold mb-2">Back-End</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Developing secure and efficient APIs using Node.js, Express,
                  and databases like MongoDB and PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default page;
