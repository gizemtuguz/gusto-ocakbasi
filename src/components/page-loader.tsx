"use client";

import { useState, useEffect, createContext, useContext } from "react";

// Context for global loading state
const LoadingContext = createContext<{
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}>({
  isLoading: true,
  setLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const setLoading = (loading: boolean) => {
    if (!loading) {
      // Delay hiding the loader for smooth transition
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 100);
      }, 300);
    }
  };

  // Fallback: hide loader after 3 seconds max
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {/* Loading Screen */}
      <div
        className={`fixed inset-0 z-[9999] bg-gusto-dark flex flex-col items-center justify-center transition-all duration-700 ${
          isLoading ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Logo/Brand */}
        <div className="text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
            Gusto
          </h1>
          <p className="text-gusto-hero text-lg sm:text-xl font-serif">Ocakbaşı</p>
        </div>

        {/* Loading Animation */}
        <div className="mt-8 flex items-center gap-2">
          <div className="w-2 h-2 bg-gusto-hero rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-gusto-hero rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-gusto-hero rounded-full animate-bounce" />
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-white/50 text-xs tracking-[0.3em] uppercase">
          Yükleniyor
        </p>
      </div>

      {/* Page Content */}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
