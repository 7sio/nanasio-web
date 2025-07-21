import { linkData } from '../data/linkData';

export default function TopSection() {
  return (
    <section id="top-section" className="relative h-screen text-white scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center blur-sm"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img src="/logo.png" alt="Logo" className="w-80 md:w-96 mb-8 drop-shadow-lg" />
        <div className="mt-8 flex gap-4">
          {linkData.map(link => (
            <a key={link.name} href={link.url} className="hover:opacity-80 transition bg-white p-2 rounded">
              <img src={link.img} alt={link.name} className="w-12 h-12 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}