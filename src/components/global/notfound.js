import Img from './assets.js';

function NotFound() {
  return (
    <div id="not-found">
      <div className="w-100 d-flex justify-content-center overflow-hidden align-items-center">
        <img src={Img[1]} style={{height: "calc(100vh - 3.5rem)", objectFit: 'cover', width: "100vw"}}/>
        <div className="drop-shadow">
          <div className="glass"></div>
          <span> This page does not exist  </span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
