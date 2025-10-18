import Hero from '../components/Hero';
import About from '../components/About';
import History from '../components/History';
import Services from '../components/Services';
import Training from '../components/Training';
import PhotoPreview from '../components/PhotoPreview';
import Partnership from '../components/Partnership';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <History />
      <Services />
      <Training />
      <PhotoPreview />
      <Partnership />
      <Contact />
    </>
  );
}
