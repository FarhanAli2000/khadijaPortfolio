import './App.css';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ExperiencePage />
        <ContactPage />
      </main>
    </div>
  );
}

export default App;
