
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <Timeline/>
      <Hero />

    </div>
  );
}

export default App;
