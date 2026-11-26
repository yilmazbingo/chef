export default function Gallery() {
  
  return (
    <section id="gallery" className="section bg-ivory text-ink"><div className="reveal text-center mb-12"><p className="eyebrow">03 / A visual journal</p><h2 className="display heading mt-4">Made to be <em>remembered.</em></h2><p className="mt-4 text-sm text-ink/65">Culinary inspiration and event design concepts.</p></div><div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">{['table','dessert','luxury-bites','rooftop-dining','food','events'].map((x,i)=><div key={x} className={'reveal overflow-hidden '+(i%2?'md:mt-12':'')}><img src={'/images/'+x+'.jpg'} alt={'Culinary journal '+(i+1)} className="aspect-[3/4] w-full object-cover hover:scale-105 transition duration-700"/></div>)}</div></section>
  );
}
