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
import tools from "@/public/tool.png";
import FrontEnd from "@/public/front-end.png";
import Backend from "@/public/backend.png";
import Image from "next/image";
export default function Skill() {
  return (
    <>
      <section id="skills" className="w-full pt-70 pb-48">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex flex-col justify-center md:justify-start md:w-1/2 space-y-6">
              <div className="flex items-center space-x-6 w-full border-b-2 pb-2">
                <Image
                  src={tools}
                  alt="tools icon"
                  width={48}
                  height={48}
                  className="object-contain hover:scale-110 transition-transform duration-200"
                />
                <h1 className="text-4xl font-bold">Tools</h1>
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
                  className="object-contain hover:scale-110 transition-transform duration-200"
                />
                <h1 className="text-4xl font-bold">Front-end</h1>
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
                  className="object-contain hover:scale-110 transition-transform duration-200"
                />
                <h1 className="text-4xl font-bold">Back-end</h1>
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
            <div className="flex flex-row justify-center md:justify-between md:w-1/2 space-y-6 space-x-5">
              <div className="flex flex-col space-y-10 w-1/2">
                <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-start text-left hover:-translate-y-2 transition-transform duration-300 ">
                  <span className="text-5xl mb-4 bg-blue-500 py-2 px-1 rounded-lg">
                    👑
                  </span>
                  <h3 className="text-xl font-bold mb-2">Leadership</h3>
                  <p className="text-gray-600 text-md leading-relaxed">
                    Experienced in leading group projects, I focus on teamwork,
                    organization, and helping everyone achieve our goals.
                  </p>
                </div>

                {/* Research */}
                <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-start text-left hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-5xl mb-4 bg-blue-100 py-2 px-1 rounded-lg">
                    🔍
                  </span>
                  <h3 className="text-xl font-bold mb-2">Research</h3>
                  <p className="text-gray-500 text-md leading-relaxed">
                    Skilled at researching and problem-solving, I quickly find
                    new tools and techniques to improve my code.
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-10 w-1/2 mt-7">
                <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-start text-left hover:-translate-y-2 transition-transform duration-300 ">
                  <span className="text-5xl mb-4 bg-blue-200 py-2 px-2 rounded-lg">
                    <Image
                      src={FrontEnd}
                      alt="front-end icon"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </span>
                  <h3 className="text-xl font-bold mb-2">Front-end</h3>
                  <p className="text-gray-500 text-md leading-relaxed">
                    I enjoy building clean, responsive, and visually appealing
                    interfaces that bring ideas to life.
                  </p>
                </div>

                {/* Research */}
                <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-start text-left hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-5xl mb-4 bg-blue-200 py-2 px-2 rounded-lg">
                    <Image
                      src={Backend}
                      alt="back-end icon"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </span>
                  <h3 className="text-xl font-bold mb-2">Back-end</h3>
                  <p className="text-gray-500 text-md leading-relaxed">
                    I specialize in building secure, reliable back-end systems
                    that keep data safe and performance smooth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
