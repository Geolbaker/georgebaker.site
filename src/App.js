
import './App.css';


import Body from './components/global/main/homepage/body.js';
import XpTheme from './components/global/main/themes/xp/body.js';
import MacTheme from './components/global/main/themes/mac/body.js';
import Tools from './components/global/tools/tools.js';
import FontSizes from './components/global/tools/font-sizes.js';
import FourOneFour from './404.js';
import './components/global/secrets.js';
import { Routes, Route} from "react-router-dom";


function App() {
    const themes = [<MacTheme />, <XpTheme />];
    const random = Math.floor(Math.random() * themes.length);

  return (
    <div id="home" className="sm:h-screen">

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/xp" element={<XpTheme />} />
        <Route path="/mac" element={<MacTheme />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/fontSizes" element={<FontSizes />} />
        <Route path="*" element={<FourOneFour />}/>
      </Routes>
    </div>


  );
}

export default App;
