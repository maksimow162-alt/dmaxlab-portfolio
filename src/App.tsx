import About from '@/components/About';
import Advantages from '@/components/Advantages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Services from '@/components/Services';

function App() {
  return (
    <div className="min-h-screen bg-graphite-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
