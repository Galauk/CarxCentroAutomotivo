import Header from './components/Header';
import Hero from './components/Hero';
import Method from './components/Method';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Method />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
