import './styles/global.css';
import { Navbar } from './components/organisms/Navbar'
import { HeroSection } from './components/organisms/HeroSection'
import "../src/i18n/i18n.ts";

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    </>
  )
}

export default App
