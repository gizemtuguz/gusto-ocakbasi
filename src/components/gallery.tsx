const galleryItems = [
  { emoji: "🍖", title: "Kuzu Şiş" },
  { emoji: "🔥", title: "Ocakbaşı" },
  { emoji: "🥙", title: "Döner" },
  { emoji: "🍢", title: "Adana Kebap" },
  { emoji: "🫓", title: "Lahmacun" },
  { emoji: "🧆", title: "Köfte" },
];

export function Gallery() {
  return (
    <section id="galeri" className="py-16 sm:py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gusto-brown/10 text-gusto-brown text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Galeri
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Göz <span className="text-gusto-brown">Ziyafeti</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Mutfağımızdan kareler
          </p>
        </div>

        {/* Gallery Grid - Mobile optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gusto-brown/10 to-gusto-brown/5 flex flex-col items-center justify-center gap-2 overflow-hidden group cursor-pointer active:scale-95 transition-transform duration-200 ${
                index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
            >
              {/* Emoji */}
              <span className={`transition-transform duration-300 group-hover:scale-110 ${
                index === 0 ? 'text-5xl sm:text-7xl lg:text-8xl' : 'text-4xl sm:text-5xl lg:text-6xl'
              }`}>
                {item.emoji}
              </span>
              
              {/* Title Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-3 sm:p-4">
                <span className="text-white text-xs sm:text-sm font-medium">
                  {item.title}
                </span>
              </div>
              
              {/* Hover/Touch Overlay */}
              <div className="absolute inset-0 bg-gusto-brown/0 group-hover:bg-gusto-brown/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Instagram CTA - Mobile friendly */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3">
            Daha fazlası için bizi takip edin
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-gusto-brown font-medium text-sm sm:text-base hover:underline"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @gustoocakbasi
          </a>
        </div>
      </div>
    </section>
  );
}
