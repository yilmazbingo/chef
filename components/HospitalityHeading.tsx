import { UtensilsCrossed } from "lucide-react";
import { serif, script } from "@/lib/fonts";

export default function HospitalityHeading() {
  return (
    <div className="mx-auto w-full max-w-3xl text-center mb-12">
      {/* Decorative gold lines and icon */}
      <div className="mb-5 flex items-center gap-5">
        <div className="h-px flex-1 bg-[#A77B35]" />

        <UtensilsCrossed
          size={32}
          strokeWidth={1.5}
          className="text-[#A77B35]"
        />

        <div className="h-px flex-1 bg-[#A77B35]" />
      </div>

      {/* Main heading */}
      <h2
        className={`${serif.className} text-4xl font-semibold
        leading-[1.1] tracking-tight text-[#2B2622]
        md:text-5xl lg:text-6xl`}
      >
        A Personal Approach
        <br />
        to{" "}
        <span
          className={`${script.className} font-normal
          text-[#A77B35]`}
        >
          Hospitality
        </span>
      </h2>

      {/* Supporting text */}
      <p className="mt-6 text-lg leading-relaxed text-[#625C54]">
        Intimate or grand, refined or relaxed — from the first conversation to
        the final course.
      </p>
    </div>
  );
}
