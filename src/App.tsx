import Layout from './components/layout/Layout';
import BackgroundEffects from './components/layout/BackgroundEffects';
import Header from './components/navigation/Header';
import HeroSection from './components/sections/HeroSection';
import MarqueeStrip from './components/sections/MarqueeStrip';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProcessSection from './components/sections/ProcessSection';
import TeamSection from './components/sections/TeamSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Layout>
      <BackgroundEffects />
      <Header />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
