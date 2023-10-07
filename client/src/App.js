import './App.css';
import CarouselFade from './components/Carousel';
import NavigationBar from './components/NavigationBar';
import FormModal from './components/FormModal';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <CarouselFade />
      <FormModal/>
    </div>
  );
}

export default App;
