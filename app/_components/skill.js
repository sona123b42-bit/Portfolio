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
    <section id="skills" className="w-full pt-70 pb-48">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-4">
          <div className="flex flex-col justify-center lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-6 w-full border-b-2 pb-2">
              <Image
                src={tools}
                alt="tools icon"
                width={48}
                height={48}
                className="object-contain hover:scale-110 transition-transform duration-200 w-10 h-10 lg:w-12 lg:h-12"
              />
              <h1 className="lg:text-4xl font-bold text-2xl">Tools</h1>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <SiGit className="text-[#F05032] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiGithub className="text-[#181717] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiDocker className="text-[#2496ED] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiFirebase className="text-[#FFCA28] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiPostman className="text-[#FF6C37] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiSupabase className="text-[#3ECF8E] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiNpm className="text-[#CB3837] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiVercel className="text-black hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiRender className="text-[#46E3B7] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
            </div>

            <div className="flex items-center space-x-6 w-full border-b-2 pb-2 mt-10">
              <Image
                src={FrontEnd}
                alt="front-end icon"
                width={48}
                height={48}
                className="object-contain hover:scale-110 w-10 h-10 lg:w-12 lg:h-12"
              />
              <h1 className="lg:text-4xl font-bold text-2xl">Front-end</h1>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <SiHtml5 className="text-[#E34F26] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiCss3 className="text-[#1572B6] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiJavascript className="text-[#F7DF1E] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiCssmodules className="text-black hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiStyledcomponents className="text-[#DB7093] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiTailwindcss className="text-[#06B6D4] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiBootstrap className="text-[#7952B3] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiRedux className="text-[#764ABC] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiReact className="text-[#61DAFB] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiNextdotjs className="text-black hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
            </div>

            <div className="flex items-center space-x-6 w-full border-b-2 pb-2 mt-10">
              <Image
                src={Backend}
                alt="back-end icon"
                width={48}
                height={48}
                className="object-contain hover:scale-110 w-10 h-10 lg:w-12 lg:h-12"
              />
              <h1 className="lg:text-4xl font-bold text-2xl">Back-end</h1>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <SiNodedotjs className="text-[#339933] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiExpress className="text-black hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiMongodb className="text-[#47A248] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiMongoose className="text-[#880000] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiPostgresql className="text-[#4169E1] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiMysql className="text-[#4479A1] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiJsonwebtokens className="text-black hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiAuth0 className="text-[#4285F4] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
              <SiSwagger className="text-[#85EA2D] hover:scale-110 w-8 h-8 md:w-10 md:h-10" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-full lg:w-1/2 gap-6 md:px-10 lg:px-0">
            <div className="flex flex-col space-y-10 w-full">
              <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-start text-left hover:-translate-y-2 transition-transform duration-300">
                <span className="mb-4 bg-blue-500 py-2 px-1 rounded-lg text-5xl">
                  👑
                </span>
                <h3 className="text-lg font-bold mb-2 lg:text-xl">
                  Leadership
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed lg:text-md">
                  Experienced in leading group projects, I focus on teamwork,
                  organization, and helping everyone achieve our goals.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-start text-left hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl mb-4 bg-blue-100 py-2 px-1 rounded-lg">
                  🔍
                </span>
                <h3 className="text-xl font-bold mb-2">Research</h3>
                <p className="text-gray-500 text-md leading-relaxed">
                  Strong in research and problem-solving, always learning new
                  tools to improve how I build and refine my projects.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-10 w-full mt-7">
              <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-start text-left hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl mb-4 bg-blue-200 py-2 px-2 rounded-lg">
                  <Image
                    src={FrontEnd}
                    alt="front-end icon"
                    width={48}
                    height={48}
                  />
                </span>
                <h3 className="text-xl font-bold mb-2">Front-end</h3>
                <p className="text-gray-500 text-md leading-relaxed">
                  I enjoy building clean, responsive interfaces that bring ideas
                  to life and provide users with a smooth, modern experience.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg shadow-md p-8 flex flex-col items-start text-left hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl mb-4 bg-blue-200 py-2 px-2 rounded-lg">
                  <Image
                    src={Backend}
                    alt="back-end icon"
                    width={48}
                    height={48}
                  />
                </span>
                <h3 className="text-xl font-bold mb-2">Back-end</h3>
                <p className="text-gray-500 text-md leading-relaxed">
                  I specialize in building secure, reliable back-end systems
                  that handle data safely and power fast, stable applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
