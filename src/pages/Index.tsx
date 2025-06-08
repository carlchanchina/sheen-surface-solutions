
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Processes from '@/components/Processes';
import Services from '@/components/Services';
import Advantages from '@/components/Advantages';
import Cases from '@/components/Cases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Processes />
      <Services />
      <Advantages />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
