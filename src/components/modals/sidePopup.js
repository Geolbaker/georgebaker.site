import {PopupToggle} from '../global/Utils.js';

function SidePopup(){
  return (
    <div id="popupDiv" className="position-fixed m-5 d-none animate__animated" style={{right: "0", bottom: "0", zIndex: "2000"}}>
    <div className="bg-info p-5 popupBlock arrow-right" style={{borderRadius: "8px", filter: "drop-shadow(0 0 0.25rem rgba(0, 0, 0, 0.2))"}}>
      <button type="button" className="close closePopup" onClick={PopupToggle}>
        <span aria-hidden="true">&times;</span>
      </button>
      Hello

    </div>
  </div>
  );
}

export default SidePopup;
