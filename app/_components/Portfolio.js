import Image from "next/image";
import firstProject from "@/public/first-project-cover.png";
import secondProject from "@/public/second-project-cover.jpg";
export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full bg-slate-100 pt-10 pb-20">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold pb-5">Portfolio</h1>
          <p className="text-xl text-gray-600">
            A collection of my full-stack projects, including API.
          </p>
          <div className="flex flex-col space-y-10 pt-20">
            <div className="flex flex-col space-x-5 shadow-lg justify-between md:flex-row items-center bg-slate-50 rounded-lg pb-15">
              <div className="md:w-1/2 m-10 rounded-lg pl-5">
                <Image
                  src={firstProject}
                  alt="my wild oasis app for staff"
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:w-1/2 flex flex-col md:text-left text-center space-y-6 md:pl-15">
                <h1 className="text-3xl font-bold">The Wild OAsis App</h1>
                <p className="max-w-md text-lg text-gray-600">
                  The Wild Oasis is a hotel management app built for staff to
                  efficiently handle bookings, guest check-ins, and daily
                  operations. It provides clear insights into occupancy,
                  revenue, and profit, helping employees track performance and
                  manage cabins with ease.
                </p>
                <div className="flex flex-row space-x-4 justify-center md:justify-start">
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
            <div className="flex flex-col-reverse space-x-5 shadow-lg justify-between md:flex-row items-center bg-slate-50 rounded-lg pb-15">
              <div className="md:w-1/2 flex flex-col md:text-left text-center space-y-6 md:pl-25">
                <h1 className="text-3xl font-bold">The Wild OAsis Website</h1>
                <p className="max-w-md text-lg text-gray-600">
                  The Wild Oasis is a modern booking website where guests can
                  explore beautiful cabins, choose their stay dates, and make
                  reservations online. Once booked, guests can easily check in
                  upon arrival and enjoy a seamless, well-organized experience
                  managed by the hotel’s staff system.
                </p>
                <div className="flex flex-row space-x-4 justify-center md:justify-start">
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
              <div className="md:w-1/2 m-10 rounded-lg ">
                <Image
                  src={secondProject}
                  alt="my wild oasis app for staff"
                  placeholder="blur"
                  loading="lazy"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
