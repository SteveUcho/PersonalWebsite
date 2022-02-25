import './App.css';
import TextData from './content.json';
import NavBar from './Components/NavBar/NavBar';
import Blurb from './Components/Blurb/Blub'
import PhotoFeed from './Components/PhotoFeed/PhotoFeed';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';
import Programming from './Components/Programming/Programming';
import AboutThis from './Components/AboutThis/AboutThis';
import ArchAndDes from './Components/ArchAndDes/ArchAndDes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Blurb/>
      <AboutMe content={TextData.aboutMe}/>
      <AboutThis content={TextData.aboutThis}/>
      <Programming content={TextData.programming}/>
      <PhotoFeed content={TextData.photography}/>
      <ArchAndDes content={TextData.archDes}/>
      <Contact/>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
    </div>
  );
}

export default App;
