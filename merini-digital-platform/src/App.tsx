import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import AuditForm from "./components/AuditForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function AppContent() {
  const { dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <AuditForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
