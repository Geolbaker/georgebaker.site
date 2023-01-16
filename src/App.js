
import './App.css';


import Body from './components/global/main/homepage/body.js';
import NewHomepage from './components/global/main/homepage/new-homepage.js';
import XpTheme from './components/global/main/themes/xp/body.js';
import MacTheme from './components/global/main/themes/mac/body.js';
import Tools from './components/global/tools/tools.js';
import FontSizes from './components/global/tools/font-sizes.js';
import FourOneFour from './404.js';
import './components/global/secrets.js';
import { Routes, Route} from "react-router-dom";


function App() {

  return (
    <div id="home" className="h-screen">

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/new" element={<NewHomepage />} />
        <Route path="/xp" element={<XpTheme />} />
        <Route path="/mac" element={<MacTheme />} />
        <Route path="/test" element={<Tools />} />
        <Route path="/fontSizes" element={<FontSizes />} />
        <Route path="*" element={<FourOneFour />}/>
      </Routes>
    </div>


  );
}

export default App;
