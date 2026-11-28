import Image from "next/image";
import Script from "next/script";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram as Instagram } from "react-icons/fa";
import { serif, script } from "@/lib/fonts";
import InstagramCards from "./InstagramCards";

const instagramUrl = "https://www.instagram.com/xenasflavorlabnpm /";

const reels = [
  "https://www.instagram.com/reel/Df0rcrCq5WN/?knvt=YXlkYjFlMnVsMnk==",
  "https://www.instagram.com/reel/DftJF00KmoC/?cnvx=MXRwbXBvcWViZmVwcg==",
  "https://www.instagram.com/reel/DeS892bqb3W/?lqvp=MWQ2czRmNjFxNHB1Zg==",
];

export default function InstagramSection() {
  return (
    <section className="bg-[#F4EFE5] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-5">
            <span className="h-px w-14 bg-[#A77B35]" />

            <Instagram size={30} strokeWidth={1.5} className="text-[#A77B35]" />

            <span className="h-px w-14 bg-[#A77B35]" />
          </div>

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A77B35]">
            Beyond the Plate
          </p>

          <h2
            className={`${serif.className} text-5xl font-medium
            leading-tight text-[#2B2622] md:text-7xl`}
          >
            Follow the{" "}
            <span className={`${script.className} font-normal text-[#A77B35]`}>
              Journey.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#625C54]">
            A glimpse into the kitchen, the science behind flavor, and the
            moments that bring people together.
          </p>
        </div>

        {/* Instagram gallery */}
        <InstagramCards />

        {/* Instagram button */}
        <div className="mt-10 flex justify-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border
            border-[#A77B35] px-7 py-4 text-sm text-[#2B2622]
            transition-colors hover:bg-[#A77B35] hover:text-white"
          >
            <Instagram size={30} className="text-[#A77B35]" />
            Explore More on Instagram
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
