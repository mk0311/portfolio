import { BrowserRouter } from "react-router-dom";

import ReactGA from "react-ga";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

ReactGA.initialize('G-NMVFY4PW2P');

const App = () => {
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
