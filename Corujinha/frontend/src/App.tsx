import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import History from './components/History';
import Services from './components/Services';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Galery from './components/Galery';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <History />
      <Services />
      <Galery />
      <Training />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
