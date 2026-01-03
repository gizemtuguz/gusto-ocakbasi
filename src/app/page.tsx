import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { PageLoader } from "@/components/page-loader";

export default function Home() {
  return (
    <PageLoader>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </main>
    </PageLoader>
  );
}
