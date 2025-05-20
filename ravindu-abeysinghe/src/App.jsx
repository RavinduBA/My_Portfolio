
// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './About';
import Skill from './components/Skill';
import Work from './components/Work';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

const App = () => {
  return (
    <>
    <Header />
    <main>
     
      <Hero />
      <About />
      <Skill />
      <Work />
      <Blog />
      <Contact />
     
    </main>
      <Footer />
    </>
  );
}

export default App;