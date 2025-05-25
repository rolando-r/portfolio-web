import './styles/global.css';
import { HeroSection, Navbar, Footer } from './components';
import i18n from './i18n/i18n';

const storedLang = localStorage.getItem("language") || "en";
i18n.changeLanguage(storedLang);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Navbar />
        <HeroSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
