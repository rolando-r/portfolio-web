import './styles/global.css';
import { HeroSection, Navbar, Footer, WorkExperience, AchievementsSection, ContactSection } from './components';
import i18n from './i18n/i18n';
import { ThemeProvider } from '@/context/ThemeContext';

const storedLang = localStorage.getItem("language") || "en";
i18n.changeLanguage(storedLang);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Navbar />
          <HeroSection />
          <WorkExperience />
          <AchievementsSection />
          <ContactSection/>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
