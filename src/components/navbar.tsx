"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#anasayfa", label: "Ana Sayfa", isExternal: false },
  { href: "#hakkimizda", label: "Hakkımızda", isExternal: false },
  { href: "/menu", label: "Menü", isExternal: true },
  { href: "#iletisim", label: "İletişim", isExternal: false },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gusto-cream shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#anasayfa" className="flex items-center z-50 relative">
              {/* Logo Skeleton */}
              <div 
                className={`absolute inset-0 bg-gusto-cream rounded transition-opacity duration-300 ${
                  logoLoaded ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <div className="h-10 lg:h-20 w-24 lg:w-32 bg-gradient-to-r from-gusto-cream via-white to-gusto-cream animate-pulse rounded" />
              </div>
              <Image
                src="/images/logo/logo.jpg"
                alt="Gusto Ocakbaşı"
                width={120}
                height={50}
                className={`h-10 lg:h-20 w-auto object-contain transition-opacity duration-300 ${
                  logoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                priority
                onLoad={() => setLogoLoaded(true)}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-gusto-dark hover:text-gusto-brown transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-gusto-dark hover:text-gusto-brown transition-colors"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Button 
                asChild 
                className="bg-gusto-dark hover:bg-gusto-dark-hover text-white rounded-full px-6"
              >
                <a href="tel:+902161234567">Bizi Arayın</a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden z-50 transition-colors duration-300 text-gusto-dark"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Background */}
        <div className="absolute inset-0 bg-gusto-cream" />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-6">
          {/* Nav Links */}
          <nav className="flex flex-col items-center space-y-6 mb-12">
            {navLinks.map((link, index) => (
              link.isExternal ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl sm:text-3xl font-serif text-gusto-dark hover:text-gusto-brown transition-all duration-300 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-2xl sm:text-3xl font-serif text-gusto-dark hover:text-gusto-brown transition-all duration-300 ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            asChild 
            size="lg"
            className={`bg-gusto-dark hover:bg-gusto-dark-hover text-white rounded-full px-10 h-14 text-base transition-all duration-300 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a href="tel:+902161234567" onClick={() => setIsOpen(false)}>
              Bizi Arayın
            </a>
          </Button>

          {/* Contact Info */}
          <div className={`absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 transition-all duration-300 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{ transitionDelay: '500ms' }}>
            <a href="tel:+902161234567" className="flex items-center gap-2 text-gusto-dark">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+90 (216) 123 45 67</span>
            </a>
            <p className="text-xs text-muted-foreground">Her gün 11:00 - 23:00</p>
          </div>
        </div>
      </div>
    </>
  );
}
