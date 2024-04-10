import './App.css';
import Advantage from './Components/Advantages/Advantage';
import Classes from './Components/Classes/Classes';
import Footer from './Components/Footer/Footer';
import Form from './Components/Form/Form';
import Hero from './Components/Hero/Hero';
import Queries from './Components/Queries/Queries';
import Service from './Components/Service/Service';
import Trainer from './Components/Trainers/Trainer';
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
        <Form/>
        <Trainer/>
        <Queries/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
