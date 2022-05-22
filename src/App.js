import logo from './logo.svg';
import './App.css';
import Header from './components/global/header.js';
import NotificationCenterModal from './components/modals/notificationCenterModal.js';
import PlaceholderCodeModal from './components/modals/placeholderCodeModal.js';
import TimedDisplayModal from './components/modals/timedDisplayModal.js';
import PopupCodeModal from './components/modals/popupCodeModal.js';
import SidePopup from './components/modals/sidePopup.js';
import Body from './components/global/body.js';
import FontSizes from './components/global/font-sizes.js';
import FourOneFour from './404.js';
import './components/global/secrets.js';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <div id="home" >
      <NotificationCenterModal  />
      <PlaceholderCodeModal />
      <TimedDisplayModal />
      <PopupCodeModal />
      <SidePopup />
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/fontSizes" element={<FontSizes />} />
        <Route path="*" element={<FourOneFour />}/>
      </Routes>
    </div>


  );
}

export default App;
