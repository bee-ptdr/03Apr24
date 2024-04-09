import './App.css';
import Advantage from './Components/Advantages/Advantage';
import Classes from './Components/Classes/Classes';
import Hero from './Components/Hero/Hero';
import Service from './Components/Service/Service';
import Yogecenter from './Components/YogaCenter/Yogecenter';

function App() {
  return (
    <>
      <div className="main_container">
        <Hero />
        <Service/>
        <Yogecenter/>
        <Advantage/>
        <Classes/>
      </div>
    </>
  );
}

export default App;
