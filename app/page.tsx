"use client"
import { Plane } from "lucide-react"

export default function BoardingPass() {
  return (
    <main className="flex justify-center items-center min-h-screen" style={{ backgroundColor: "#FF8A00" }}>
      <article className="w-full max-w-2xl mx-auto relative">
        <section className="hidden sm:flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-xl">
          <aside className="w-full sm:w-1/4 p-6 flex items-center justify-center">
            <figure className="w-32 h-32 sm:w-full sm:h-auto aspect-square">
              <img src="/qr.png" alt="Boarding Pass QR Code" className="w-full h-auto" />
            </figure>
          </aside>

          <aside className="hidden sm:block relative">
            <div className="absolute top-0 bottom-0 h-full border-l border-dashed border-orange-200"></div>
            <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full" style={{ backgroundColor: "#FF8A00" }}></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full" style={{ backgroundColor: "#FF8A00" }}></div>
          </aside>

          <section className="flex-1 p-6 flex flex-col">
            <header className="flex flex-col mb-4">
              <div className="flex justify-between mb-1">
                <address className="text-[#0c1253] text-[10px] font-bold text-left not-italic">
                  Mumbai,
                  <br />
                  India
                </address>
                <address className="text-[10px] text-[#0c1253] font-bold text-left not-italic">
                  Amsterdam,
                  <br />
                  Netherlands
                </address>
              </div>

              <div className="flex items-center justify-between relative">
                <span className="text-[#0c1253] text-4xl font-bold">BOM</span>
                <div className="absolute left-16 right-16 top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                  <hr className="border-t border-dashed border-gray-300 w-full absolute" />
                  <span className="bg-white px-2 z-10 flex items-center justify-center">
                    <Plane size={16} className="text-gray-400 z-10" />
                  </span>
                </div>
                <span className="text-[#0c1253] text-4xl font-bold">AMS</span>
              </div>

              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <time>
                  Wed, July 27<sup>th</sup>
                  <br />
                  1:00 AM
                </time>
                <time>
                  Thu, July 27<sup>th</sup>
                  <br />
                  8:30 AM
                </time>
              </div>
            </header>

            <section className="mt-4">
              <div className="grid grid-cols-5 gap-2 text-xs">
                <span className="text-gray-400">Passenger</span>
                <span className="text-gray-400">Seat</span>
                <span className="text-gray-400">Terminal</span>
                <span className="text-gray-400">Gate</span>
                <span className="text-gray-400">Boarding</span>

                <span className="font-semibold text-[#0c1253]">Nikita Sharma</span>
                <span className="font-semibold text-[#0c1253]">4A</span>
                <span className="font-semibold text-[#0c1253]">D</span>
                <span className="font-semibold text-[#0c1253]">32</span>
                <span className="font-semibold text-[#0c1253]">12:40 PM</span>
              </div>
            </section>
          </section>

          <footer className="w-full sm:w-12 bg-[#0c1253] flex flex-row sm:flex-col items-center justify-center relative sm:rounded-r-lg rounded-b-lg sm:rounded-b-none h-12 sm:h-auto">
            <span className="hidden sm:block absolute top-11 left-1/2 transform -translate-x-1/2 -rotate-90 whitespace-nowrap text-[10px] text-white tracking-widest">
              Boarding Pass
            </span>
            <div className="hidden sm:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-400 mt-2"></div>
              <span className="transform -rotate-90 whitespace-nowrap text-[10px] font-bold text-white tracking-wider uppercase">
                Jet Airways
              </span>
            </div>
          </footer>
        </section>

        <section className="sm:hidden flex flex-col bg-white rounded-lg overflow-hidden shadow-xl max-w-[320px] mx-auto">
          <aside className="w-full p-6 flex items-center justify-center bg-white">
            <figure className="w-32 h-32 aspect-square">
              <img src="/qr.png" alt="Boarding Pass QR Code" className="w-full h-auto" />
            </figure>
          </aside>

          <aside className="relative flex items-center h-0">
            <div className="absolute left-0 right-0 w-full border-t border-dashed border-orange-200"></div>
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full" style={{ backgroundColor: "#FF8A00" }}></div>
            <div className="absolute -right-3 top-0 w-6 h-6 rounded-full" style={{ backgroundColor: "#FF8A00" }}></div>
          </aside>

          <section className="flex-1 p-6 flex flex-col">
            <header className="flex flex-col">
              <div className="flex justify-between items-start">
                <div className="flex flex-col items-start">
                  <div className="text-gray-500 text-[10px] mb-1">
                    <span className="transform -rotate-90 origin-top-left ml-2 mb-6 inline-block">
                      Mumbai,
                      <br />
                      India
                    </span>
                  </div>
                  <span className="text-[#0c1253] text-3xl font-bold">BOM</span>
                  <time className="text-[10px] text-gray-500 mt-1">
                    Wed, July 27<sup>th</sup>
                    <br />
                    1:00 AM
                  </time>
                </div>

                <div className="flex-1 relative mx-4 h-16">
                  <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-gray-300 w-full"></div>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Plane size={16} className="text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="text-gray-500 text-[10px] mb-1">
                    <span className="transform -rotate-90 origin-top-right mr-2 mb-6 inline-block">
                      Amsterdam,
                      <br />
                      Netherlands
                    </span>
                  </div>
                  <span className="text-[#0c1253] text-3xl font-bold">AMS</span>
                  <time className="text-[10px] text-gray-500 mt-1 text-right">
                    Thu, July 27<sup>th</sup>
                    <br />
                    8:30 AM
                  </time>
                </div>
              </div>
            </header>

            <section className="mt-8 grid grid-cols-2 gap-y-3 text-[10px]">
              <div>
                <span className="text-gray-400">Passenger</span>
                <span className="font-semibold text-[#0c1253]">Nikita Sharma</span>
              </div>
              <div>
                <span className="text-gray-400">Seat</span>
                <span className="font-semibold text-[#0c1253]">4A</span>
              </div>
              <div>
                <span className="text-gray-400">Terminal</span>
                <span className="font-semibold text-[#0c1253]">D</span>
              </div>
              <div>
                <span className="text-gray-400">Gate</span>
                <span className="font-semibold text-[#0c1253]">32</span>
              </div>
              <div className="col-span-2">
                <span className="text-gray-400">Boarding</span>
                <span className="font-semibold text-[#0c1253]">12:40 PM</span>
              </div>
            </section>
          </section>

          <footer className="w-full h-12 bg-[#0c1253] flex items-center justify-between px-4 mt-4">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-yellow-400 mr-2"></div>
              <span className="text-[10px] text-white font-bold tracking-wider uppercase">JET AIRWAYS</span>
            </div>
            <span className="text-[10px] text-white tracking-widest">Boarding Pass</span>
          </footer>
        </section>
      </article>
    </main>
  )
}
