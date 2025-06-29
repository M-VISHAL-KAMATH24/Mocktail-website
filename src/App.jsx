import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText);
import Navbar from './components/Navbar';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Hero from './components/Hero';
import Art from './components/Art';
import Menu from './components/Menu';
import Contact from './components/Contact';
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>




    </main>
  )
}

export default App;