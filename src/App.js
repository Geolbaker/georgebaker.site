import logo from './logo.svg';
import './App.css';
import Header from './components/global/header.js';
import NotificationCenterModal from './components/modals/notificationCenterModal.js';
import ColorPaletteModal from './components/modals/colorPaletteModal.js';
import PlaceholderCodeModal from './components/modals/placeholderCodeModal.js';
import TimedDisplayModal from './components/modals/timedDisplayModal.js';
import PopupCodeModal from './components/modals/popupCodeModal.js';
import SidePopup from './components/modals/sidePopup.js';
import Body from './components/global/body.js';
import Tools from './components/global/tools.js';
import FontSizes from './components/global/font-sizes.js';
import FourOneFour from './404.js';
import './components/global/secrets.js';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <div id="home" >
      <NotificationCenterModal  />
      <ColorPaletteModal  />
      <PlaceholderCodeModal />
      <TimedDisplayModal />
      <PopupCodeModal />
      <SidePopup />
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/fontSizes" element={<FontSizes />} />
        <Route path="*" element={<FourOneFour />}/>
      </Routes>
    </div>


  );
}

export default App;
