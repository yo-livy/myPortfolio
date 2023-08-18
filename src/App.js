import './App.css';
import './components/Style.css';
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import About from './components/About.js'
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import ContactForm from './components/ContactForm.js';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
