import './styles/global.css';
import { HeroSection, Navbar, Footer } from './components';
import "../src/i18n/i18n.ts";

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Footer/>
    </>
  )
}

export default App
