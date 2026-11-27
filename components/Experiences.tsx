import HospitalityHeading from "./HospitalityHeading";

const services = [
  {
    n: "01",
    title: "Private dining",
    desc: "An intimate table. A menu composed around you. Restaurant-level care in the comfort of your own space.",
    img: "rooftop-dining",
  },
  {
    n: "02",
    title: "Celebrations & events",
    desc: "From milestone dinners to elegant receptions, every detail considered and every plate intentional.",
    img: "skewer",
  },
  {
    n: "03",
    title: "Corporate experiences",
    desc: "Thoughtful hospitality for gatherings that deserve more than the expected.",
    img: "corporate",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="bg-ivory text-ink section">
      <p
        className="mb-5 text-center text-xs font-medium
  uppercase tracking-[0.3em] text-[#A77B35]"
      >
        01 / The Experiences
      </p>
      <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <HospitalityHeading />
      </div>
      <div className="grid md:grid-cols-3 gap-7">
        {services.map((s) => (
          <article key={s.n} className="reveal group">
            <div className="overflow-hidden aspect-[4/5] relative">
              <img
                src={"/images/" + s.img + ".jpg"}
                alt={s.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-ivory px-3 py-2 text-xs">
                {s.n}
              </span>
            </div>
            <h3 className="display text-3xl mt-6">{s.title}</h3>
            <p className="text-sm leading-relaxed text-ink/65 mt-3">{s.desc}</p>
            <a
              href="#inquire"
              className="inline-block mt-5 text-xs tracking-widest uppercase border-b border-gold pb-2"
            >
              Explore ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
