"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLoading } from "@/components/page-loader";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { setLoading } = useLoading();

  const handleImageLoad = () => {
    setImageLoaded(true);
    setLoading(false);
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        {/* Loading Skeleton */}
        <div 
          className={`absolute inset-0 bg-gusto-dark transition-opacity duration-700 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gusto-dark via-gusto-dark-hover to-gusto-dark animate-pulse" />
        </div>
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop"
          alt="Gusto Ocakbaşı - Restoran atmosferi"
          fill
          className={`object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          priority
          sizes="100vw"
          onLoad={handleImageLoad}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
          <div className="w-12 sm:w-20 h-px bg-white/40" />
          <span className="text-white/70 text-[10px] sm:text-xs tracking-[0.3em] uppercase">Est. 2010</span>
          <div className="w-12 sm:w-20 h-px bg-white/40" />
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none mb-6 sm:mb-8">
          Gusto
          <br />
          <span className="text-gusto-hero">Ocakbaşı</span>
        </h1>

        {/* Tagline */}
        <p className="text-white/80 text-sm sm:text-base md:text-lg tracking-[0.15em] sm:tracking-[0.2em] uppercase font-light mb-8 sm:mb-12 max-w-xl mx-auto">
          Ateşin Hikayesi Tabaklara Yansıyor...
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-6 sm:px-0">
          <Button 
            asChild 
            size="lg"
            className="w-full sm:w-auto bg-gusto-dark hover:bg-gusto-dark-hover text-white rounded-none px-10 sm:px-12 h-12 sm:h-14 text-sm sm:text-base font-medium tracking-wider uppercase"
          >
            <Link href="/menu">Menüyü İncele</Link>
          </Button>
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white/70 border border-white/50 text-gusto-dark hover:bg-white/90 hover:text-gusto-dark rounded-none px-10 sm:px-12 h-12 sm:h-14 text-sm sm:text-base font-medium tracking-wider uppercase"
          >
            <a href="#hakkimizda">Hakkımızda</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#hakkimizda" className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors">
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase">Keşfet</span>
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Side Decorative Elements - Desktop */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-white/30" />
          <a 
            href="https://instagram.com/gustoocakbasi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors -rotate-90 text-xs tracking-widest uppercase whitespace-nowrap"
          >
            @gustoocakbasi
          </a>
          <div className="w-px h-20 bg-white/30" />
        </div>
      </div>

      {/* Right Side - Contact */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-white/30" />
          <a 
            href="tel:+905313392249"
            className="text-white/60 hover:text-white transition-colors -rotate-90 text-xs tracking-widest uppercase whitespace-nowrap"
          >
            0531 339 22 49
          </a>
          <div className="w-px h-20 bg-white/30" />
        </div>
      </div>
    </section>
  );
}
