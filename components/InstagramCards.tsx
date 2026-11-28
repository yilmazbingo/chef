import Image from "next/image";
import { Play, ArrowUpRight } from "lucide-react";
import { serif } from "@/lib/fonts";

const reels = [
  {
    image: "/images/reel-1.jpg",
    category: "The Experience",
    title: "The Calm Before Service",
    url: "https://www.instagram.com/reel/Df0rcrCq5WN/?knvt=YXlkYjFlMnVsMnk==",
  },
  {
    image: "/images/reel-2.jpg",
    category: "The Science",
    title: "Beyond the Ingredients",
    url: "https://www.instagram.com/reel/REEL_ID_2/",
  },
  {
    image: "/images/reel-3.jpg",
    category: "The Craft",
    title: "The Art of Presentation",
    url: "https://www.instagram.com/reel/DeS892bqb3W/?lqvp=MWQ2czRmNjFxNHB1Zg==",
  },
];

export default function InstagramCards() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {reels.map((reel) => (
        <a
          key={reel.url}
          href={reel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {/* Cover image */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={reel.image}
              alt={reel.title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover transition-transform
              duration-700 group-hover:scale-105"
            />

            {/* Subtle overlay */}
            <div
              className="absolute inset-0 bg-black/10
              transition-colors group-hover:bg-black/25"
            />

            {/* Play button */}
            <div
              className="absolute inset-0 flex items-center
              justify-center"
            >
              <div
                className="flex h-16 w-16 items-center
                justify-center rounded-full border border-white/80
                bg-black/10 text-white backdrop-blur-sm
                transition-all duration-300
                group-hover:scale-110 group-hover:bg-[#A77B35]"
              >
                <Play size={23} fill="currentColor" className="ml-1" />
              </div>
            </div>
          </div>

          {/* Card information */}
          <div className="mt-5">
            <p
              className="text-[11px] uppercase
              tracking-[0.25em] text-[#A77B35]"
            >
              {reel.category}
            </p>

            <h3
              className={`${serif.className} mt-2
              text-3xl font-medium text-[#2B2622]`}
            >
              {reel.title}
            </h3>

            <div
              className="mt-3 flex items-center gap-2
              text-xs text-[#625C54]
              transition-colors group-hover:text-[#A77B35]"
            >
              Watch on Instagram
              <ArrowUpRight size={14} />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
