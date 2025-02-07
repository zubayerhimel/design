import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Work from '@/components/Work';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <Services />
      <Experience />
      <Work />
      <Blog />
      <Contact />
    </main>
  );
}
