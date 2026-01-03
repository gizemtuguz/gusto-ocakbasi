import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Contact() {
  return (
    <section id="iletisim" className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2574&auto=format&fit=crop"
          alt="Gusto Ocakbaşı atmosferi"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge with lines */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <div className="w-6 sm:w-8 h-px bg-white/50" />
            <span className="text-white/80 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
              İletişim
            </span>
            <div className="w-6 sm:w-8 h-px bg-white/50" />
          </div>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Bizimle iletişime geçebilir veya sosyal medya hesaplarımızı takip edebilirsiniz.
          </p>

          {/* Address */}
          <div className="mb-8 sm:mb-10">
            <p className="text-white font-medium text-base sm:text-lg mb-1">
              Gusto Ocakbaşı
            </p>
            <p className="text-white/70 text-sm sm:text-base mb-2">
              İnönü, Adnan Menderes Blv., 33130 Yenişehir/Mersin
            </p>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/90 text-sm underline underline-offset-4 hover:text-gusto-cream transition-colors"
            >
              Haritada Göster
            </a>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto">
            {/* Phone Card */}
            <a 
              href="tel:+905313392249"
              className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gusto-dark flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">
                Telefon
              </h3>
              <p className="text-muted-foreground text-sm">
                0531 339 22 49
              </p>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://instagram.com/gustoocakbasi"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gusto-dark flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-foreground text-base sm:text-lg mb-1">
                Instagram
              </h3>
              <p className="text-muted-foreground text-sm">
                @gustoocakbasi
              </p>
            </a>
          </div>

          {/* Working Hours - Mobile friendly */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-white/60 text-xs sm:text-sm">
              Her gün açığız: <span className="text-white font-medium">11:00 - 23:00</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
