import About from "./components/About";
import Contact from "./components/Contact";
import Expericence from "./components/Expericence";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Expericence />
      <Contact />
    </div>
  );
}

export default App;
