import "./App.css";
import About from "./components/About";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pim from "./components/Pim";
import Portfolio from "./components/Portfolio";
import Qualification from "./components/Qualification";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Pim />
      <Testimonial />
      <Contactme />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
