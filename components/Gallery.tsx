import { Great_Vibes } from "next/font/google";
import { Playfair_Display } from "next/font/google";

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});
export default function Gallery() {
  return (
    <section id="gallery" className="section bg-ivory text-ink">
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-[#A77B35]" />

          <p className="text-xs uppercase tracking-[0.3em] text-[#A77B35]">
            03 / A Visual Journal
          </p>

          <span className="h-px w-10 bg-[#A77B35]" />
        </div>

        <h2
          className={`${serif.className} text-5xl font-medium
    leading-tight tracking-tight text-[#2B2622]
    md:text-7xl lg:text-8xl`}
        >
          Made to be{" "}
          <span className={`${script.className} font-normal text-[#A77B35]`}>
            remembered.
          </span>
        </h2>

        <p className="mt-5 text-base leading-relaxed text-[#625C54]">
          Culinary inspiration and event design concepts.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {[
          "table",
          "dessert",
          "luxury-bites",
          "rooftop-dining",
          "food",
          "events",
        ].map((x, i) => (
          <div
            key={x}
            className={"reveal overflow-hidden " + (i % 2 ? "md:mt-12" : "")}
          >
            <img
              src={"/images/" + x + ".jpg"}
              alt={"Culinary journal " + (i + 1)}
              className="aspect-[3/4] w-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
