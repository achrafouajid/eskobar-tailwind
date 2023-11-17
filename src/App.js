import Contact from './Components/Contact';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Feature from './Components/Feature';
import History from './Components/History';
import Newsletter from './Components/Newsletter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Feature />
      <History />
      <Contact />
      <Newsletter />
    </div>
  );
}

export default App;
