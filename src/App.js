import logo from './logo.svg';
import './App.css';
import Header from './components/global/header.js';
import NotificationCenterModal from './components/modals/notificationCenterModal.js';
import PlaceholderCodeModal from './components/modals/placeholderCodeModal.js';
import Body from './components/global/body.js';
import FontSizes from './components/global/font-sizes.js';
import NotFound from './components/global/notfound.js';
import './components/global/secrets.js';
import { BrowserRouter, Routes, Route,} from "react-router-dom";


function App() {
  return (
    <div id="home" >
      <NotificationCenterModal  />
      <PlaceholderCodeModal />
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/fontSizes" element={<FontSizes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>


  );
}

export default App;