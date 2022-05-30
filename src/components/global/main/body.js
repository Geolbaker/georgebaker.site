import assets from '../assets.js';
import {Mouse} from './mainUtil.js';
import {useEffect} from 'react';


function Body() {
  useEffect(()=>{
    Mouse();
  },[]);
  return (
    <div id="body" className="align-items-center d-flex flex-wrap justify-content-center pt-5">
      <div class="typing-wrapper">
        <div class="typing-intro">
          Welcome to my site. :)
        </div>
      </div>
    </div>
  );

}

export default Body;
