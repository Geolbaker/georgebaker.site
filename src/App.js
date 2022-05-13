import logo from './logo.svg';
import './App.css';
import Header from './components/global/header.js'

function App() {
  return (
    <React.StrictMode>
      <Header />
    </React.StrictMode>

    <div class="container-fluid d-flex justify-content-center">
      <div class="row w-100 text-center" id="helpfulCode">
        <div class="col-12 mt-5">
          <h2>Helpful Code</h2>
        </div>


      </div>
    </div>
  );
}

export default App;
