import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import NavigationBar from './components/NavigationBar';
import NotFound from './pages/NotFound';
import { Results } from './pages/Results';

function App() {
  return (
    <Router>
        <NavigationBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result/:id' element={<Results />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
