
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Questions from './components/Questions';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <Timeline />
      <Questions />
      <Faq />

    </div>
  );
}

export default App;
