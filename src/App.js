
import './App.css';


import Body from './components/global/main/homepage/body.js';
import XpTheme from './components/global/main/themes/xp/body.js';
import MacTheme from './components/global/main/themes/mac/body.js';
import FourOneFour from './404.js';
import './components/global/secrets.js';
import { Routes, Route} from "react-router-dom";


function App() {

  return (
    <div id="home" className="h-screen">

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/xp" element={<XpTheme />} />
        <Route path="/mac" element={<MacTheme />} />
        <Route path="*" element={<FourOneFour />}/>
      </Routes>
    </div>


  );
}

export default App;
