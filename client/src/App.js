import './App.css';
import CarouselFade from './components/Carousel';
import NavigationBar from './components/NavigationBar';
import FormModal from './components/FormModal';
import ScrollT from './components/ScrollT';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <CarouselFade />
      <FormModal/>
      <ScrollT/>
    </div>
  );
}

export default App;
