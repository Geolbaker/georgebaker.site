import logo from './logo.svg';
import './App.css';
import Header from './components/global/header.js';
import NotificationCenterModal from './components/modals/notificationCenterModal.js';
import PlaceholderCodeModal from './components/modals/placeholderCodeModal.js';
import Body from './components/global/body.js';
import FontSizes from './components/global/font-sizes.js';
import FourOneFour from './404.js';
import './components/global/secrets.js';
import { BrowserRouter, Routes, Route, Redirect} from "react-router-dom";


function App() {
  return (
    <div id="home" >
      <NotificationCenterModal  />
      <PlaceholderCodeModal />
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/fontSizes" element={<FontSizes />} />
        <Route path="/404.oops">
          <Redirect to={<FourOneFour />} />
        </Route>
      </Routes>
    </div>


  );
}

export default App;
