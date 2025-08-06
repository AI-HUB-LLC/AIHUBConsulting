import './App.css';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyAihubSection from './components/WhyAihubSection';
import ContactSection from './components/ContactSection';
import VisionSection from './components/VisionSection';
import logo from './assets/logo.svg';

const NAV_LINKS = [
  { label: 'Mission', href: '#mission' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why AIHUB?', href: '#why-aihub' },
];

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo-group">
          <img src={logo} alt="AI HUB Logo" className="navbar-logo-img" />
          <span className="navbar-logo">AI HUB Consulting</span>
        </div>
        <ul className="navbar-links">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <HeroSection />
      <MissionSection />
      <VisionSection />
      <AboutSection />
      <WhyAihubSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;
