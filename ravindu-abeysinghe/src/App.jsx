
// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './About';
import Skill from './components/Skill';
import Work from './components/Work';
import Review from './components/Review';
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
      <Review />
      <Contact />
     
    </main>
      <Footer />
    </>
  );
}

export default App;