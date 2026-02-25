import { Link } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
export default function About() {
  return (
    <div className="pt-24 bg-white text-[#0f172a]">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-[50px] md:text-[80px] font-black leading-tight">
          Crafted for the
          <br />
          Modern Minimalist.
        </h1>

        <p className="mt-8 text-lg text-[#475569] max-w-2xl mx-auto">
          Threadvault is built on simplicity, precision, and timeless design. We
          create essentials that elevate your everyday presence.
        </p>

        <div className="mt-8 flex justify-center">
          <ThemeToggle />
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="bg-[#f5f2eb] py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT SIDE */}
            <div className="animate-slideLeft opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0f172a]">
                Our Story
              </h2>

              <div className="w-16 h-1 bg-[#f4b400] mb-8"></div>

              <p className="text-[#475569] leading-8 mb-6">
                What started as a simple idea turned into a pursuit of
                perfection. We wanted clothing that felt refined yet effortless
                — something that speaks without trying too hard.
              </p>

              <p className="text-[#475569] leading-8">
                Every piece is designed with restraint and precision. We focus
                on structure, silhouette, and fabric integrity — creating
                garments that move naturally and age beautifully.
              </p>
            </div>

            {/* IMAGE SIDE */}
            <div className="animate-slideRight opacity-0 relative">
              <div className="absolute -inset-4 bg-[#f4b400]/10 rounded-3xl blur-2xl"></div>

              <img
                src="/about.jpg"
                alt="Our Story"
                className="relative rounded-2xl shadow-xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f7f4] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Premium Fabric */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/fabric.jpg"
                alt="Premium Fabric"
                className="w-full h-[380px] object-cover object-top group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#0f172a]">
                Premium Fabric
              </h3>
              <p className="text-[#475569]">
                We source materials that feel exceptional and age beautifully.
              </p>
            </div>
          </div>

          {/* Timeless Design */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/design.jpg"
                alt="Timeless Design"
                className="w-full h-[380px] object-cover object-top group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#0f172a]">
                Timeless Design
              </h3>
              <p className="text-[#475569]">
                Trends fade. Precision silhouettes remain.
              </p>
            </div>
          </div>

          {/* Modern Fit */}
          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 group overflow-hidden">
            <div className="overflow-hidden">
              <img
                src="/fit.jpg"
                alt="Modern Fit"
                className="w-full h-[380px] object-cover object-top group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#0f172a]">
                Modern Fit
              </h3>
              <p className="text-[#475569]">
                Tailored to complement movement and structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Wear the Confidence.</h2>

        <Link to="/collection">
          <button className="bg-[#f4b400] hover:bg-[#e09f00] text-black font-semibold px-10 py-4 rounded-lg transition duration-300 shadow-lg">
            Explore Collection
          </button>
        </Link>
      </section>
    </div>
  );
}