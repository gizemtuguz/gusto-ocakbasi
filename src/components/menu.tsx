"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  { id: "kebaplar", label: "Kebaplar", emoji: "🍖" },
  { id: "mezeler", label: "Mezeler", emoji: "🥗" },
  { id: "salatalar", label: "Salatalar", emoji: "🥬" },
  { id: "tatlilar", label: "Tatlılar", emoji: "🍮" },
  { id: "icecekler", label: "İçecekler", emoji: "🍹" },
];

const menuItems = {
  kebaplar: [
    { name: "Adana Kebap", description: "Acılı kıyma kebabı, közlenmiş sebze ile", price: "₺320" },
    { name: "Urfa Kebap", description: "Acısız kıyma kebabı, özel baharatlarla", price: "₺320" },
    { name: "Patlıcan Kebap", description: "Kuşbaşı et, közlenmiş patlıcan ile", price: "₺380" },
    { name: "Kuzu Şiş", description: "Marine edilmiş kuzu but parçaları", price: "₺360" },
    { name: "Tavuk Şiş", description: "Özel soslu tavuk göğsü", price: "₺280" },
    { name: "Beyti Kebap", description: "Lavaş sarmalı, yoğurt ve sos ile", price: "₺400" },
    { name: "Karışık Izgara", description: "4 çeşit kebap, pilav ve salata ile", price: "₺550" },
    { name: "Ali Nazik", description: "Patlıcan püre üzeri kuşbaşı", price: "₺420" },
  ],
  mezeler: [
    { name: "Humus", description: "Tahinli nohut ezmesi", price: "₺85" },
    { name: "Babagannuş", description: "Közlenmiş patlıcan ezmesi", price: "₺90" },
    { name: "Haydari", description: "Sarımsaklı yoğurt", price: "₺75" },
    { name: "Atom", description: "Acılı biber ezmesi", price: "₺95" },
    { name: "Sigara Böreği", description: "Peynirli (4 adet)", price: "₺110" },
    { name: "Lahmacun", description: "Kıymalı Türk pizzası", price: "₺85" },
  ],
  salatalar: [
    { name: "Çoban Salata", description: "Domates, salatalık, biber, soğan", price: "₺75" },
    { name: "Mevsim Salata", description: "Marul, havuç, kırmızı lahana", price: "₺70" },
    { name: "Piyaz", description: "Kuru fasulye salatası", price: "₺85" },
    { name: "Gavurdağı Salata", description: "Nar ekşili, cevizli", price: "₺95" },
  ],
  tatlilar: [
    { name: "Künefe", description: "Kadayıf, peynir, şerbet", price: "₺150" },
    { name: "Baklava", description: "Fıstıklı (4 dilim)", price: "₺180" },
    { name: "Sütlaç", description: "Fırın sütlaç", price: "₺90" },
    { name: "Katmer", description: "Gaziantep usulü, kaymak ve fıstık", price: "₺160" },
  ],
  icecekler: [
    { name: "Ayran", description: "Ev yapımı", price: "₺35" },
    { name: "Şalgam", description: "Acılı/Acısız", price: "₺40" },
    { name: "Türk Kahvesi", description: "Geleneksel", price: "₺50" },
    { name: "Çay", description: "Demlik", price: "₺30" },
    { name: "Meşrubat", description: "Çeşitli", price: "₺45" },
  ],
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("kebaplar");

  return (
    <section id="menu" className="py-16 sm:py-20 lg:py-32 bg-gusto-page-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gusto-brown/10 text-gusto-brown text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Menümüz
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Lezzetlerimizi <span className="text-gusto-brown">Keşfedin</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Geleneksel tariflerle hazırlanan eşsiz lezzetlerimiz
          </p>
        </div>

        {/* Category Tabs - Horizontal Scroll on Mobile */}
        <div className="mb-6 sm:mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <ScrollArea className="w-full whitespace-nowrap sm:hidden">
            <div className="flex gap-2 pb-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full shrink-0 h-12 px-5 ${
                    activeCategory === category.id 
                      ? 'bg-gusto-dark hover:bg-gusto-dark-hover text-white' 
                      : 'border-gusto-brown/30 text-gusto-brown'
                  }`}
                >
                  <span className="mr-2">{category.emoji}</span>
                  {category.label}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="invisible" />
          </ScrollArea>
          
          {/* Desktop Category Buttons */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full h-11 px-6 ${
                  activeCategory === category.id 
                    ? 'bg-gusto-dark hover:bg-gusto-dark-hover text-white' 
                    : 'border-gusto-brown/30 text-gusto-brown hover:bg-gusto-brown/10'
                }`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg shadow-black/5">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="space-y-4 sm:space-y-6">
                {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-start gap-3 sm:gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-base sm:text-lg">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="font-serif text-lg sm:text-xl font-bold text-gusto-brown whitespace-nowrap">
                        {item.price}
                      </div>
                    </div>
                    {index < menuItems[activeCategory as keyof typeof menuItems].length - 1 && (
                      <Separator className="mt-4 sm:mt-6" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8">
          * Fiyatlarımıza KDV dahildir.
        </p>
      </div>
    </section>
  );
}
