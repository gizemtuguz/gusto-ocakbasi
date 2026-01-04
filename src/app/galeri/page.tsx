"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { ArrowLeft, Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const galleryImages = [
  { 
    id: 1, 
    src: "/images/gallery/518983632_17852188926493017_7714685396582048655_n.jpg",
    title: "Gusto Ocakbaşı",
    category: "mekan"
  },
  { 
    id: 2, 
    src: "/images/gallery/519010961_17852188917493017_7142680851437944723_n.jpg",
    title: "Lezzetler",
    category: "yemek"
  },
  { 
    id: 3, 
    src: "/images/gallery/519507825_17852188935493017_6089565892379378000_n.jpg",
    title: "Sofra",
    category: "yemek"
  },
  { 
    id: 4, 
    src: "/images/gallery/520027494_17852947851493017_8269524576650214978_n.jpg",
    title: "Ambiyans",
    category: "mekan"
  },
  { 
    id: 5, 
    src: "/images/gallery/587789413_17870976816493017_8580055934566091214_n.jpg",
    title: "Detaylar",
    category: "mekan"
  },
];

const categories = [
  { id: "tumu", label: "Tümü" },
  { id: "yemek", label: "Yemekler" },
  { id: "mekan", label: "Mekan" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("tumu");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const filteredImages = activeCategory === "tumu" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [filteredImages.length, isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [filteredImages.length, isTransitioning]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    setDragOffset(currentTouch - touchStart);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  // Handle body overflow when lightbox opens/closes
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  return (
    <>
    <main className="min-h-screen bg-gusto-page-bg">
      {/* Navbar */}
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
              <a href="tel:+905313392249" className="flex items-center gap-2">
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
              Fotoğraflar
            </span>
            <div className="w-12 sm:w-20 h-px bg-gusto-brown/30" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-gusto-dark mb-4">
            Galeri
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Mekanımızdan ve lezzetlerimizden kareler
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

      {/* Gallery Grid */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden cursor-pointer rounded-sm"
              >
                {/* Loading Skeleton */}
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 bg-gusto-cream">
                    <div className="absolute inset-0 bg-gradient-to-r from-gusto-cream via-white to-gusto-cream animate-pulse" />
                  </div>
                )}
                
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                    loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onLoad={() => handleImageLoad(image.id)}
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gusto-dark/0 group-hover:bg-gusto-dark/40 transition-all duration-300 flex items-center justify-center">
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Bu kategoride henüz fotoğraf bulunmuyor.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gusto-dark py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-xs sm:text-sm mb-2">Rezervasyon</p>
          <a 
            href="tel:+905313392249" 
            className="font-serif text-xl sm:text-2xl lg:text-3xl text-white hover:text-gusto-hero transition-colors"
          >
            0531 339 22 49
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

    {/* Lightbox Modal - Modern & Minimal */}
    <div 
      className={`fixed inset-0 z-[100] transition-all duration-300 ${
        lightboxOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95"
        onClick={closeLightbox}
      />

      {/* Close Button - Minimal */}
      <button
        onClick={closeLightbox}
        className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-3 transition-all duration-300 ${
          lightboxOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <X className="w-6 h-6 sm:w-7 sm:h-7 text-white/70 hover:text-white transition-colors" />
      </button>

      {/* Navigation Arrows - Minimal */}
      <button
        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
        className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-2 transition-all duration-300 ${
          lightboxOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 text-white/50 hover:text-white transition-colors" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-2 transition-all duration-300 ${
          lightboxOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 text-white/50 hover:text-white transition-colors" />
      </button>

      {/* Main Image Container with Swipe Support */}
      <div 
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={(e) => {
          // Click on sides to navigate (desktop)
          const rect = containerRef.current?.getBoundingClientRect();
          if (!rect) return;
          const clickX = e.clientX;
          const width = rect.width;
          if (clickX < width * 0.3) {
            goToPrevious();
          } else if (clickX > width * 0.7) {
            goToNext();
          }
        }}
      >
        {/* Image with drag feedback */}
        <div 
          className={`relative w-full h-full max-w-5xl max-h-[80vh] mx-4 sm:mx-16 ${
            isDragging ? '' : 'transition-all duration-300 ease-out'
          }`}
          style={{ 
            transform: `translateX(${dragOffset}px)`,
          }}
        >
          {filteredImages[currentIndex] && (
            <Image
              key={currentIndex}
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].title}
              fill
              className={`object-contain select-none transition-opacity duration-300 ease-out ${
                lightboxOpen && !isTransitioning ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="100vw"
              priority
              draggable={false}
            />
          )}
        </div>
      </div>

      {/* Bottom Progress Indicator - Ultra Minimal */}
      <div 
        className={`absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 transition-all duration-500 ${
          lightboxOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {filteredImages.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'w-8 h-2 bg-gusto-cream' 
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
