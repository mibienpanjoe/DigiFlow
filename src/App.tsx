import Layout from './components/layout/Layout';
import Header from './components/navigation/Header';
import Footer from './components/footer/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import TeamSection from './components/sections/TeamSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

const App = () => {
    return (
        <Layout>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <TeamSection />
                <TestimonialsSection />
                <FAQSection />
                <ContactSection />
            </main>
            <Footer />
        </Layout>
    );
};

export default App;
