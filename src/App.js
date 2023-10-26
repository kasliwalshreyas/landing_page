import { Stack } from '@mui/material';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import HomeInfoFooter from './components/UI/HomeInfoFooter';
import MeetAheadMessage from './components/MeetAheadMessage/MeetAheadMessage';
import SelfImprovementInfo from './components/SelfImprovementInfo/SelfImprovementInfo';
import NavBar from './components/UI/NavBar';
import EQInfo from './components/UI/EQInfo';
import TestFeature from './components/TestFeature/TestFeature';
import OpenVacanciesFeature from './components/OpenVacanciesFeature/OpenVacanciesFeature';
import WorkWithUsFeature from './components/WorkWithUsFeature/WorkWithUsFeature';
import AnonymousRatingFeature from './components/AnonymousRatingFeature/AnonymousRatingFeature';

function App() {

  const EQInfo1 = {
    heading: `EQ beats IQ`,
    info1: `People with high emotional
    intelligence (EQ) live more fulfilled
    lives. They tend to be happier and
    have healthier relationships.`,
    info2: `They are more successful in their
    pursuits and make for inspiring
    leaders. According to science, they
    earn $29k a year.`
  }

  const EQInfo2 = {
    heading: `Be the best you
    with EQ`,
    info1: `Not having your own emotions
    under control might be holding
    you back.`,
    info2: `Additionally, not understanding
    those of others stops you from
    being parent, friend you can be.`
  }



  return (
    <div className="App">
      <NavBar />
      <Stack padding={'80px 0px 0px 0px'} width={'100vw'} maxWidth={'100vw'}>
        <Home />
        <EQInfo info={EQInfo1} />
        <Gallery />
        <MeetAheadMessage />
        <SelfImprovementInfo />
        <EQInfo info={EQInfo2} />
        <AnonymousRatingFeature />
        <TestFeature />
        <WorkWithUsFeature />
        <OpenVacanciesFeature />
      </Stack>
    </div >
  );
}

export default App;
