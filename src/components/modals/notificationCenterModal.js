import {OpenNofiticationCenter, NotificationCheck} from '../global/Utils.js';
import {useEffect, useState} from 'react';
import axios from 'axios';

function NotificationCenterModal(){
  const [userData,setUserData]=useState([])
  useEffect(()=>{
    axios.get('https://api.github.com/repos/Geolbaker/georgereactsite/releases')
      .then(res=>{
        setUserData(res.data);
        NotificationCheck(res.data, 'initialCheck');
      })
      .catch(err=>{
        console.log(err);
      })
  },[]);
  const users=userData.map((data,id)=>{
    return <div key={id} id={"id" + data.id} className="notificationEntry bg-info" onClick={() => NotificationCheck(data.id, 'onClick')}>
              <h2>{data.name} </h2>
              <p>{data.id}</p>
            </div>
  });
  return (
    <div id="notificationCenterDiv" className="position-absolute m-5 d-none animate__animated">
      <div className="p-5 popupBlockNotification arrow-top">
        <button type="button" className="close closePopup" onClick={OpenNofiticationCenter}>
          <span aria-hidden="true">&times;</span>
        </button>
        <div id="notificationContent">
          <>
            {users}
          </>
        </div>

      </div>
    </div>
  );
}

export default NotificationCenterModal;
