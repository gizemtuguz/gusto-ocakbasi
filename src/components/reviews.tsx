"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Mert Demir",
    rating: 5,
    date: "2 hafta önce",
    text: "Akşam yemeği için gittik yemekler lezzetliydi hizmet fazlasıyla iyiydi. Fiyatları bu kalitedeki bir restoran için aşırı ucuz. Özellikle güveçte mantarını öneriyorum. Mersin'e geldiğim zamanlarda uğrak noktam olacağı kesin.",
    avatar: "M",
    isLocalGuide: true,
  },
  {
    id: 2,
    name: "Cansu",
    rating: 5,
    date: "6 ay önce",
    text: "Her gittiğimde ayrı bir keyif alıyorum ama özellikle mezeleri ve enginarı gerçekten muazzam böyle bir enginar daha önce yemediğinize eminim, efsane lezzetli. Rakı-meze uyumu, atmosfer, servis hepsi dört dörtlük.",
    avatar: "C",
  },
  {
    id: 3,
    name: "Pınar Ağır",
    rating: 5,
    date: "2 ay önce",
    text: "Her şey dört dörtlüktü! Özellikle sunum ve tatlar olağanüstüydü. Şiddetle tavsiye ederim.",
    avatar: "P",
  },
  {
    id: 4,
    name: "Dilara Dural",
    rating: 5,
    date: "5 ay önce",
    text: "Yemekler, mezeler her şey çok lezzetli, personel ilgili güleryüzlü, temiz hijyenik bir mekan, müzikler güzel nostalji. Özel günler için güzel bir tercih olur, tekrar gideceğiz çok memnun kaldık.",
    avatar: "D",
    isLocalGuide: true,
  },
  {
    id: 5,
    name: "Elif Hatunoğlu",
    rating: 5,
    date: "2 ay önce",
    text: "Çalışanlara ilgi ve güleryüzlü karşılamalarından dolayı teşekkür ederiz. Beyti sarma ve Ali nazik harikaydı! Neredeyse her yemekte şef dokunuşu var, porsiyonlar oldukça büyük.",
    avatar: "E",
  },
  {
    id: 6,
    name: "Z.Kübra Ş.Atabay",
    rating: 5,
    date: "1 hafta önce",
    text: "Kız arkadaşlarımızla geldik ortam nezih yemekler lezzetli porsiyonlar büyük çalışanlar ilgili gayet memnun kaldık.",
    avatar: "Z",
  },
  {
    id: 7,
    name: "Hande Özçiftçi",
    rating: 5,
    date: "6 ay önce",
    text: "Muhteşem ortam sakin nezih bir yer temizlik ilgi görevlilerin nezaketi yemeklerin lezzeti mezeler ve sunum şahane kesinlikle Mersin'deki favori mekanlarımdan oldunuz.",
    avatar: "H",
  },
  {
    id: 8,
    name: "Özlem Yıldız",
    rating: 5,
    date: "3 ay önce",
    text: "Muhteşem bir mekandı. Garsonların ve şefin ilgisi süperdi. Yemekler, mezeler, salatalar çok iyiydi. Atmosfer, müzikler çok nezih ve huzur vericiydi. Herkese tavsiye ederim!",
    avatar: "Ö",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gusto-page-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge with lines */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 sm:w-12 h-px bg-gusto-brown/30" />
            <span className="text-gusto-brown text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
              Müşteri Yorumları
            </span>
            <div className="w-8 sm:w-12 h-px bg-gusto-brown/30" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gusto-dark mb-4">
            Misafirlerimiz Ne Diyor?
          </h2>

          {/* Google Rating */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-gusto-dark text-lg">4.8</span>
            </div>
            <span className="text-muted-foreground text-sm">
              Google&apos;da 500+ yorum
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-4 sm:p-5 rounded-sm border border-gusto-brown/10 hover:border-gusto-brown/20 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-3">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gusto-cream flex items-center justify-center shrink-0">
                  <span className="font-serif font-bold text-gusto-dark text-sm">
                    {review.avatar}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-medium text-gusto-dark text-sm truncate">
                      {review.name}
                    </h4>
                    {review.isLocalGuide && (
                      <span className="text-[10px] bg-gusto-brown/10 text-gusto-brown px-1.5 py-0.5 rounded shrink-0">
                        Yerel Rehber
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <StarRating rating={review.rating} />
                    <span className="text-muted-foreground text-xs">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-4">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Google Link */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="https://www.google.com/search?sca_esv=4e07353132a138ee&sxsrf=AE3TifMBICsQAuL_AHGOZLGGNyh-HBOsJw:1767437863040&q=Gusto+Ocakba%C5%9F%C4%B1+Restaurant+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDIyNjGztDQ1t7QwNzIwNrAw28DI-IpRxb20uCRfwT85MTsp8ej8IxsVglKLSxJLixLzShQi84tKc3MSixaxEqUMAPGyWzxoAAAA&rldimm=9223469957987203086&tbm=lcl&hl=tr-TR&sa=X&ved=2ahUKEwi-yPSPm--RAxXiSPEDHdHdKKwQ9fQKegQIRBAG&biw=1686&bih=893&dpr=2#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gusto-brown hover:text-gusto-dark transition-colors text-sm font-medium"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            Tüm Google Yorumlarını Gör
          </a>
        </div>
      </div>
    </section>
  );
}
