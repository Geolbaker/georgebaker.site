import {OpenNofiticationCenter, NotificationClear} from '../global/Utils.js';

function NotificationCenterModal(){
  return (
    <div id="notificationCenterDiv" className="position-absolute m-5 d-none animate__animated">
      <div className="p-5 popupBlockNotification arrow-top">
        <button type="button" className="close closePopup" onClick={OpenNofiticationCenter}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div id="notificationContent">

        </div>

      </div>
    </div>
  );
}

export default NotificationCenterModal;
