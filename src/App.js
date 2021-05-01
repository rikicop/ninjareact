import Navbar from './Navbar';
import Home from './Home';
//import Countries from './Countries';

function App() {

    return ( 
    <div className="App">
        <Navbar />
        <div className="content">
          <Home />
        </div>
        {/* <Countries/> */}
    </div>
    );
}

export default App;

