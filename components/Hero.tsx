export default function Hero() {
  
  return (
    <section id="home" className="hero relative min-h-[850px] h-[100svh] flex items-center text-ivory"><div className="absolute inset-0 hero-image"/><div className="absolute inset-0 hero-shade"/><div className="relative max-w-[1600px] w-full mx-auto px-6 md:px-14 pt-24"><div className="eyebrow text-[#e4cda1] mb-7">New York City <span className="inline-block w-10 h-px bg-gold mx-3 align-middle"/> Bespoke culinary experiences</div><h1 className="display text-[clamp(4rem,9vw,9rem)] leading-[.88] max-w-5xl">The art of<br/><em>gathering.</em></h1><p className="mt-9 max-w-md text-base md:text-lg text-ivory/85 leading-relaxed">Where culinary creativity meets extraordinary experiences. Private dining, crafted entirely around you.</p><a className="gold-btn mt-9 inline-flex" href="#inquire">Design your experience <span>↗</span></a></div><div className="absolute bottom-8 left-6 md:left-14 text-[10px] uppercase tracking-[.25em]">Scroll to discover ↓</div><div className="absolute bottom-8 right-14 hidden md:block text-xs tracking-widest">NYC / EST. IN CRAFT</div></section>
  );
}
