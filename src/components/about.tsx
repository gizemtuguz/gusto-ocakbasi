"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Loading skeleton for individual images
function ImageSkeleton() {
  return (
    <div className="absolute inset-0 bg-gusto-cream">
      <div className="absolute inset-0 bg-gradient-to-r from-gusto-cream via-white to-gusto-cream animate-pulse" />
    </div>
  );
}

const galleryImages = [
  { 
    id: 1, 
    src: "/images/gallery/518983632_17852188926493017_7714685396582048655_n.jpg",
    title: "Gusto Ocakbaşı" 
  },
  { 
    id: 2, 
    src: "/images/gallery/519010961_17852188917493017_7142680851437944723_n.jpg",
    title: "Lezzetler" 
  },
  { 
    id: 3, 
    src: "/images/gallery/519507825_17852188935493017_6089565892379378000_n.jpg",
    title: "Sofra" 
  },
  { 
    id: 4, 
    src: "/images/gallery/520027494_17852947851493017_8269524576650214978_n.jpg",
    title: "Ambiyans" 
  },
];

export function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setDragOffset(0);
  };

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

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
    <section id="hakkimizda" className="py-16 sm:py-20 lg:py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge with lines */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gusto-brown" />
              <span className="text-gusto-brown text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                Hakkımızda
              </span>
            </div>
            
            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
              Ateşin hikayesi tabaklara yansıyor...
            </h2>
            
            {/* Paragraphs */}
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Gusto Ocakbaşı, İstanbul&apos;u fragmanlar halinde yaşatıp, senin, benim, 
                onun İstanbul&apos;una bakma fırsatı sunan kendini de dönüştüren bir restoran. 
                Dekoruyla, planıyla bu fragmanlara uyum sağlıyor.
              </p>
              
              <p className="font-medium text-foreground">
                Ateşin hikayesi tabaklara yansıyor...
              </p>
              
              <p>
                Ateş, mitolojik anlatılarda bilgiyi, gücü, aydınlığı temsil eden en büyük 
                sembollerden biri. İnsanın hikayesinde ise anahtar bir keşif, kültürlerimizi, 
                inançlarımızı, dünyamızı şekillendirmek için itici bir güç.
              </p>
              
              <p>
                Gusto, bu hikayelerin filizlendiği Anadolu mutfağını, ateşi odak noktasına 
                alarak karşınıza getiriyor, hem de İstanbul&apos;un kalbinde. 150 kişilik 
                kapasitesiyle hizmet veren Gusto Ocakbaşı, özel etkinlikler için 
                ayrı bir alanı da barındırmaktadır.
              </p>
            </div>
          </div>

          {/* Right - Image Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="group relative aspect-square overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Loading Skeleton */}
                  {!loadedImages.has(image.id) && <ImageSkeleton />}
                  
                  {/* Image */}
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                      loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    onLoad={() => handleImageLoad(image.id)}
                  />
                  
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-gusto-dark/0 group-hover:bg-gusto-dark/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                      <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gusto-brown" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* View Full Gallery Button */}
            <div className="mt-4 text-center">
              <Link 
                href="/galeri"
                className="inline-flex items-center gap-2 text-gusto-brown hover:text-gusto-dark transition-colors text-sm font-medium"
              >
                <span>Tüm Galeriyi Görüntüle</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

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
          <Image
            key={currentIndex}
            src={galleryImages[currentIndex].src}
            alt={galleryImages[currentIndex].title}
            fill
            className={`object-contain select-none transition-opacity duration-300 ease-out ${
              lightboxOpen && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
            sizes="100vw"
            priority
            draggable={false}
          />
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
          {galleryImages.map((_, index) => (
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

