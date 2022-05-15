import logo from './logo.svg';
import './App.css';
import Header from './components/global/header.js';
import NotificationCenterModal from './components/modals/notificationCenterModal.js';
import Body from './components/global/body.js';


function App() {
  return (
    <div id="home" >
      <Header />
      <NotificationCenterModal  />
      <Body />
    </div>


  );
}

export default App;
