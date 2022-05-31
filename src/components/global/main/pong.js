import {PongFunction, PongToggle} from './mainUtil.js';
import {useEffect} from 'react';


function Pong() {
  useEffect(() => {
    PongFunction();
  });
  return (
    <div className="invisible" id="PongGameContainer">
      <span className="PongGameBackground" onClick={PongToggle}></span>
      <canvas className="PongGame"></canvas>
    </div>
  )
}

export default Pong;
