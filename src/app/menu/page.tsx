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
    { name: "Adana Kebap", description: "El yapımı acılı kıyma kebabı, közlenmiş domates ve biber ile", price: "₺320", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200&h=200&fit=crop" },
    { name: "Urfa Kebap", description: "Özel baharatlarla hazırlanan acısız kıyma kebabı", price: "₺320", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200&h=200&fit=crop" },
    { name: "Patlıcan Kebap", description: "Kuşbaşı et, közlenmiş patlıcan dilimleri ile", price: "₺380", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&h=200&fit=crop" },
    { name: "Kuzu Şiş", description: "Marine edilmiş kuzu but parçaları, özel soslarla", price: "₺360", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=200&h=200&fit=crop" },
    { name: "Tavuk Şiş", description: "Özel marine soslu tavuk göğsü", price: "₺280", image: "https://images.unsplash.com/photo-1532636875304-0c89119571d3?w=200&h=200&fit=crop" },
    { name: "Beyti Kebap", description: "Lavaş sarmalı kıyma kebabı, yoğurt ve özel sos ile", price: "₺400", image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=200&h=200&fit=crop" },
    { name: "Karışık Izgara", description: "Adana, Urfa, kuzu şiş ve tavuk şiş bir arada", price: "₺550", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=200&h=200&fit=crop" },
    { name: "Ali Nazik", description: "Közlenmiş patlıcan püre üzeri tereyağlı kuşbaşı", price: "₺420", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=200&h=200&fit=crop" },
    { name: "Kaburga Kebabı", description: "8 saatte pişirilen dana kaburga, özel sos ile", price: "₺480", image: "https://images.unsplash.com/photo-1504973960431-1c467e159aa4?w=200&h=200&fit=crop" },
  ],
  pideler: [
    { name: "Kuşbaşılı Pide", description: "Dana kuşbaşı, domates ve biber ile", price: "₺280", image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?w=200&h=200&fit=crop" },
    { name: "Kaşarlı Pide", description: "Bol kaşar peyniri ile", price: "₺180", image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=200&h=200&fit=crop" },
    { name: "Karışık Pide", description: "Sucuk, kaşar, pastırma ile", price: "₺260", image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=200&h=200&fit=crop" },
    { name: "Lahmacun", description: "İnce hamur, özel kıyma harcı (2 adet)", price: "₺120", image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=200&h=200&fit=crop" },
  ],
  baslangiclar: [
    { name: "Humus", description: "Tahinli nohut ezmesi, zeytinyağı ile", price: "₺85", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=200&h=200&fit=crop" },
    { name: "Babagannuş", description: "Közlenmiş patlıcan ezmesi", price: "₺90", image: "https://images.unsplash.com/photo-1626203234257-4b7e8f7df9c1?w=200&h=200&fit=crop" },
    { name: "Haydari", description: "Süzme yoğurt, sarımsak ve dereotu", price: "₺75", image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=200&h=200&fit=crop" },
    { name: "Atom", description: "Acılı biber ezmesi, cevizli", price: "₺95", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=200&h=200&fit=crop" },
    { name: "Sigara Böreği", description: "Peynirli, çıtır (4 adet)", price: "₺110", image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=200&h=200&fit=crop" },
    { name: "Meze Tabağı", description: "5 çeşit meze bir arada (2 kişilik)", price: "₺220", image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=200&h=200&fit=crop" },
    { name: "Mercimek Çorbası", description: "Geleneksel tarif, limon ile", price: "₺65", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop" },
  ],
  salatalar: [
    { name: "Çoban Salata", description: "Domates, salatalık, biber, soğan, zeytinyağı", price: "₺75", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&h=200&fit=crop" },
    { name: "Mevsim Salata", description: "Marul, havuç, kırmızı lahana, turp", price: "₺70", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=200&fit=crop" },
    { name: "Piyaz", description: "Kuru fasulye, soğan, maydanoz, sumak", price: "₺85", image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=200&h=200&fit=crop" },
    { name: "Gavurdağı Salatası", description: "Nar ekşisi, ceviz, domates", price: "₺95", image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=200&h=200&fit=crop" },
    { name: "Roka Salatası", description: "Parmesan, cherry domates, balsamik sos", price: "₺110", image: "https://images.unsplash.com/photo-1604497181015-76590d828b75?w=200&h=200&fit=crop" },
  ],
  tatlilar: [
    { name: "Künefe", description: "Tel kadayıf, peynir, şerbet, Antep fıstığı", price: "₺150", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=200&h=200&fit=crop" },
    { name: "Baklava", description: "Antep fıstıklı, el açması (4 dilim)", price: "₺180", image: "https://images.unsplash.com/photo-1598110750624-207050c4f28c?w=200&h=200&fit=crop" },
    { name: "Sütlaç", description: "Fırında pişmiş, tarçınlı", price: "₺90", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop" },
    { name: "Katmer", description: "Gaziantep usulü, kaymak ve fıstık ile", price: "₺160", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop" },
    { name: "Dondurma", description: "Maraş usulü (3 top)", price: "₺95", image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=200&h=200&fit=crop" },
  ],
  icecekler: [
    { name: "Ayran", description: "Ev yapımı, köpüklü", price: "₺35", image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=200&h=200&fit=crop" },
    { name: "Şalgam", description: "Acılı veya acısız", price: "₺40", image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop" },
    { name: "Türk Kahvesi", description: "Geleneksel, lokum ile", price: "₺50", image: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=200&h=200&fit=crop" },
    { name: "Çay", description: "Rize çayı, demlik", price: "₺30", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200&h=200&fit=crop" },
    { name: "Taze Sıkılmış Portakal Suyu", description: "Günlük taze", price: "₺65", image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=200&h=200&fit=crop" },
    { name: "Limonata", description: "Ev yapımı, naneli", price: "₺55", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=200&h=200&fit=crop" },
    { name: "Meşrubat", description: "Coca-Cola, Fanta, Sprite", price: "₺45", image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=200&h=200&fit=crop" },
  ],
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("kebaplar");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

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
              {/* Logo Skeleton */}
              <div 
                className={`absolute inset-0 transition-opacity duration-300 ${
                  logoLoaded ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="h-10 lg:h-14 w-24 lg:w-32 bg-gradient-to-r from-gusto-page-bg via-white to-gusto-page-bg animate-pulse rounded" />
              </div>
              <Image
                src="/images/logo/logo.jpg"
                alt="Gusto Ocakbaşı"
                width={120}
                height={50}
                className={`h-10 lg:h-14 w-auto object-contain transition-opacity duration-300 ${
                  logoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                priority
                onLoad={() => setLogoLoaded(true)}
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
          <div className="max-w-3xl mx-auto">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div 
                key={item.name}
                className={`py-5 sm:py-6 ${
                  index !== menuItems[activeCategory as keyof typeof menuItems].length - 1 
                    ? 'border-b border-gusto-brown/10' 
                    : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-base sm:text-lg font-semibold text-gusto-dark mb-0.5 truncate">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-serif text-base sm:text-lg font-bold text-gusto-hero shrink-0">
                        {item.price}
                      </span>
                    </div>
                  </div>
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
