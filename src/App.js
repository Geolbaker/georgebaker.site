import logo from './logo.svg';
import './App.css';
import Header from './components/global/header.js';
import NotificationCenterModal from './components/modals/notificationCenterModal.js';
import PlaceholderCodeModal from './components/modals/placeholderCodeModal.js';
import Body from './components/global/body.js';
import './components/global/secrets.js';


function App() {
  return (
    <div id="home" >
      <NotificationCenterModal  />
      <PlaceholderCodeModal />
      <Header />
      <Body />
    </div>


  );
}

export default App;
