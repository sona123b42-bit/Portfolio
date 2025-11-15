import Image from "next/image";
import firstProject from "@/public/first-project-cover.png";
import secondProject from "@/public/second-project-cover.jpg";
import thirdProject from "@/public/third-project-cover.png";
export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-slate-100 pt-10 pb-20">
      <div className="max-w-7xl mx-auto p-2 md:px-15 lg:px-0">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-6xl font-bold pb-5 text-4xl">Portfolio</h1>
          <p className="text-xl text-gray-600 text-center">
            A collection of my full-stack projects, including API.
          </p>

          <div className="flex flex-col space-y-10 pt-20">
            {/* Project 1 */}
            <div className="flex flex-col lg:flex-row gap-5 shadow-lg justify-between items-center bg-slate-50 rounded-lg pb-15 px-2 lg:px-0">
              <div className="lg:w-1/2 lg:m-10 rounded-lg lg:pl-5 pt-2 lg:pt-0">
                <Image
                  src={firstProject}
                  alt="Natours Project"
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="lg:w-1/2 flex flex-col lg:text-left text-center space-y-6 lg:pl-15">
                <h1 className="text-3xl font-bold">The Wild Oasis App</h1>
                <p className="max-w-md text-lg text-gray-600 text-center lg:text-left">
                  The Wild Oasis is a hotel management app built for staff to
                  efficiently handle bookings, guest check-ins, and daily
                  operations. It provides clear insights into occupancy,
                  revenue, and profit, helping employees track performance and
                  manage cabins with ease.
                </p>

                <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center lg:justify-start w-full">
                  <a
                    href="https://wild-oasis-journey.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-10 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/sona123b42-bit/wild-oasis-journey.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-300 text-slate-600 px-10 py-3 rounded-md text-lg hover:bg-slate-100 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col-reverse lg:flex-row gap-5 shadow-lg justify-between items-center bg-slate-50 rounded-lg pb-15 px-2 lg:px-0">
              <div className="lg:w-1/2 flex flex-col lg:text-left text-center space-y-6 lg:pl-25">
                <h1 className="text-3xl font-bold">The Wild Oasis Website</h1>
                <p className="max-w-md text-lg text-gray-600 text-center lg:text-left">
                  The Wild Oasis is a modern booking website where guests can
                  explore beautiful cabins, choose their stay dates, and make
                  reservations online. Once booked, guests can easily check in
                  upon arrival and enjoy a seamless, well-organized experience
                  managed by the hotel’s staff system.
                </p>

                <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center lg:justify-start w-full">
                  <a
                    href="https://the-wild-oasis-website-orcin-psi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-10 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/sona123b42-bit/The-Wild-Oasis-Website.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-300 text-slate-600 px-10 py-3 rounded-md text-lg hover:bg-slate-100 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>

              <div className="lg:w-1/2 lg:m-10 rounded-lg pt-2 lg:pt-0">
                <Image
                  src={secondProject}
                  alt="The Wild Oasis Website"
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col lg:flex-row gap-5 shadow-lg justify-between items-center bg-slate-50 rounded-lg pb-15 px-2 lg:px-0">
              <div className="lg:w-1/2 lg:m-10 rounded-lg lg:pl-5 pt-2 lg:pt-0">
                <Image
                  src={thirdProject}
                  alt="Natours Project"
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="lg:w-1/2 flex flex-col lg:text-left text-center space-y-6 lg:pl-15">
                <h1 className="text-3xl font-bold">Natours</h1>
                <p className="max-w-md text-lg text-gray-600 lg:text-left text-center">
                  Natours is a modern tour-booking app I built with Next.js and
                  Tailwind CSS, designed for fast performance and a clean user
                  experience. It connects to a custom Node.js + MongoDB backend
                  to handle tours, authentication, and bookings, showing my
                  ability to create full-stack web apps that feel professional
                  and production-ready.
                </p>

                <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 justify-center lg:justify-start w-full">
                  <a
                    href="https://natours-dusky-five.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-10 py-3 rounded-md text-lg hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/sona123b42-bit/Natours.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-slate-300 text-slate-600 px-10 py-3 rounded-md text-lg hover:bg-slate-100 transition-colors"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
