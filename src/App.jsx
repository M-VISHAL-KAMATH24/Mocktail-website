import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger,SplitText);
import Navbar from './components/Navbar';
import Cocktails from './components/Cocktails';
import About from './components/About';
import Hero from './components/Hero';
const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>




    </main>
  )
}

export default App;