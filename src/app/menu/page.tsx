"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { id: "kebaplar", label: "Kebaplar" },
  { id: "pideler", label: "Pideler" },
  { id: "baslangiclar", label: "Başlangıçlar" },
  { id: "salatalar", label: "Salatalar" },
  { id: "tatlilar", label: "Tatlılar" },
  { id: "icecekler", label: "İçecekler" },
];

const menuItems = {
  kebaplar: [
    { name: "Adana Kebap", description: "El yapımı acılı kıyma kebabı, közlenmiş domates ve biber ile", price: "₺320" },
    { name: "Urfa Kebap", description: "Özel baharatlarla hazırlanan acısız kıyma kebabı", price: "₺320" },
    { name: "Patlıcan Kebap", description: "Kuşbaşı et, közlenmiş patlıcan dilimleri ile", price: "₺380" },
    { name: "Kuzu Şiş", description: "Marine edilmiş kuzu but parçaları, özel soslarla", price: "₺360" },
    { name: "Tavuk Şiş", description: "Özel marine soslu tavuk göğsü", price: "₺280" },
    { name: "Beyti Kebap", description: "Lavaş sarmalı kıyma kebabı, yoğurt ve özel sos ile", price: "₺400" },
    { name: "Karışık Izgara", description: "Adana, Urfa, kuzu şiş ve tavuk şiş bir arada", price: "₺550" },
    { name: "Ali Nazik", description: "Közlenmiş patlıcan püre üzeri tereyağlı kuşbaşı", price: "₺420" },
    { name: "Kaburga Kebabı", description: "8 saatte pişirilen dana kaburga, özel sos ile", price: "₺480" },
  ],
  pideler: [
    { name: "Kuşbaşılı Pide", description: "Dana kuşbaşı, domates ve biber ile", price: "₺280" },
    { name: "Kaşarlı Pide", description: "Bol kaşar peyniri ile", price: "₺180" },
    { name: "Karışık Pide", description: "Sucuk, kaşar, pastırma ile", price: "₺260" },
    { name: "Lahmacun", description: "İnce hamur, özel kıyma harcı (2 adet)", price: "₺120" },
  ],
  baslangiclar: [
    { name: "Humus", description: "Tahinli nohut ezmesi, zeytinyağı ile", price: "₺85" },
    { name: "Babagannuş", description: "Közlenmiş patlıcan ezmesi", price: "₺90" },
    { name: "Haydari", description: "Süzme yoğurt, sarımsak ve dereotu", price: "₺75" },
    { name: "Atom", description: "Acılı biber ezmesi, cevizli", price: "₺95" },
    { name: "Sigara Böreği", description: "Peynirli, çıtır (4 adet)", price: "₺110" },
    { name: "Meze Tabağı", description: "5 çeşit meze bir arada (2 kişilik)", price: "₺220" },
    { name: "Mercimek Çorbası", description: "Geleneksel tarif, limon ile", price: "₺65" },
  ],
  salatalar: [
    { name: "Çoban Salata", description: "Domates, salatalık, biber, soğan, zeytinyağı", price: "₺75" },
    { name: "Mevsim Salata", description: "Marul, havuç, kırmızı lahana, turp", price: "₺70" },
    { name: "Piyaz", description: "Kuru fasulye, soğan, maydanoz, sumak", price: "₺85" },
    { name: "Gavurdağı Salatası", description: "Nar ekşisi, ceviz, domates", price: "₺95" },
    { name: "Roka Salatası", description: "Parmesan, cherry domates, balsamik sos", price: "₺110" },
  ],
  tatlilar: [
    { name: "Künefe", description: "Tel kadayıf, peynir, şerbet, Antep fıstığı", price: "₺150" },
    { name: "Baklava", description: "Antep fıstıklı, el açması (4 dilim)", price: "₺180" },
    { name: "Sütlaç", description: "Fırında pişmiş, tarçınlı", price: "₺90" },
    { name: "Katmer", description: "Gaziantep usulü, kaymak ve fıstık ile", price: "₺160" },
    { name: "Dondurma", description: "Maraş usulü (3 top)", price: "₺95" },
  ],
  icecekler: [
    { name: "Ayran", description: "Ev yapımı, köpüklü", price: "₺35" },
    { name: "Şalgam", description: "Acılı veya acısız", price: "₺40" },
    { name: "Türk Kahvesi", description: "Geleneksel, lokum ile", price: "₺50" },
    { name: "Çay", description: "Rize çayı, demlik", price: "₺30" },
    { name: "Taze Sıkılmış Portakal Suyu", description: "Günlük taze", price: "₺65" },
    { name: "Limonata", description: "Ev yapımı, naneli", price: "₺55" },
    { name: "Meşrubat", description: "Coca-Cola, Fanta, Sprite", price: "₺45" },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("kebaplar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gusto-page-bg">
      {/* Navbar - Same style as main site */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gusto-page-bg shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Back to Home */}
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gusto-dark hover:text-gusto-brown transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">Ana Sayfa</span>
            </Link>

            {/* Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <Image
                src="/images/logo/logo.jpg"
                alt="Gusto Ocakbaşı"
                width={120}
                height={50}
                className="h-10 lg:h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* CTA */}
            <Button 
              asChild 
              className="bg-gusto-dark hover:bg-gusto-dark-hover text-white rounded-full px-4 sm:px-6 text-sm"
            >
              <a href="tel:+902161234567" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Rezervasyon</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />

      {/* Page Header */}
      <div className="bg-gusto-page-bg py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 sm:w-20 h-px bg-gusto-brown/30" />
            <span className="text-gusto-brown text-[10px] sm:text-xs tracking-[0.3em] uppercase">
              Lezzetler
            </span>
            <div className="w-12 sm:w-20 h-px bg-gusto-brown/30" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gusto-dark mb-4">
            Menümüz
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Ateşin hikayesi tabaklara yansıyor
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-16 lg:top-20 z-40 bg-gusto-page-bg border-y border-gusto-brown/10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2 -mx-4 px-4 sm:justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 whitespace-nowrap transition-all duration-300 text-sm font-medium border ${
                  activeCategory === category.id
                    ? 'bg-gusto-dark text-white border-gusto-dark'
                    : 'bg-transparent text-gusto-dark border-gusto-brown/20 hover:border-gusto-brown/40'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Title */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gusto-dark">
              {categories.find(c => c.id === activeCategory)?.label}
            </h2>
          </div>

          {/* Menu Items */}
          <div className="max-w-2xl mx-auto">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div 
                key={item.name}
                className={`py-6 ${
                  index !== menuItems[activeCategory as keyof typeof menuItems].length - 1 
                    ? 'border-b border-gusto-brown/10' 
                    : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-lg sm:text-xl font-semibold text-gusto-dark mb-1">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-serif text-lg sm:text-xl font-bold text-gusto-brown shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-muted-foreground text-xs sm:text-sm">
              * Fiyatlarımıza KDV dahildir. Menümüz mevsimsel olarak güncellenebilir.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gusto-dark py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-xs sm:text-sm mb-2">Rezervasyon</p>
          <a 
            href="tel:+902161234567" 
            className="font-serif text-xl sm:text-2xl lg:text-3xl text-white hover:text-gusto-hero transition-colors"
          >
            +90 216 123 45 67
          </a>
          <p className="text-white/40 text-xs mt-4">Her gün 11:00 - 23:00</p>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <Link 
              href="/"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
