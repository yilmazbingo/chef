export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-ink text-ivory grid md:grid-cols-2">
      <div className="min-h-[440px] md:min-h-[650px]">
        <img
          src="/images/detail.jpg"
          alt="Artfully presented culinary creation"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="reveal flex flex-col justify-center p-9 md:p-20">
        <p className="eyebrow text-gold">02 / The philosophy</p>
        <h2 className="display heading mt-6">
          Craft is in
          <br />
          <em>the details.</em>
        </h2>
        <p className="mt-7 leading-relaxed text-ivory/70">
          Food should be remembered for how it makes people feel. From the
          balance of a plate to the rhythm of service, every decision is guided
          by care, precision and a love of hospitality.
        </p>
        <p className="mt-5 text-ivory/70 leading-relaxed">
          A menu is never simply a list of dishes. It is a conversation between
          season, technique and the people at the table.
        </p>
        <a href="#inquire" className="mt-9 self-start outline-btn">
          Meet your chef ↗
        </a>
      </div>
    </section>
  );
}
