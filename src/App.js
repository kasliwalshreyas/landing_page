import './App.css';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import HomeInfoFooter from './components/HomeInfoFooter';
import MeetAheadMessage from './components/MeetAheadMessage/MeetAheadMessage';
import SelfImprovementInfo from './components/SelfImprovementInfo';
import NavBar from './components/UI/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <HomeInfoFooter />
      <Gallery />
      <MeetAheadMessage />
      <SelfImprovementInfo />
    </div>
  );
}

export default App;
