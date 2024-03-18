
import Content from './Components/Content';
import Footer from './Components/Footer';
import Maincontent from './Components/Maincontent';
import NavBar from './Components/NavBar';
import Prefooter from './Components/Prefooter';
import Video from './Components/Videos';

function App() {
  return (
    <div className="App">
     
     <NavBar/>
     <Maincontent/>
     <Video/>
     <Content/>
     <Prefooter/>
     <Footer/>
    </div>
  );
}

export default App;
