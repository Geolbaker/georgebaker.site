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
    return <div key={id} id={"id" + data.id} className="notificationEntryNew notificationEntry p-3" onClick={() => NotificationCheck(data.id, 'onClick')}>
              <p className="m-2"><strong>New Release</strong> {data.name}</p>
            </div>
  });
  return (
    <div id="notificationCenterDiv" className="container fixed m-5 py-16 invisible">
    <div className="fixed w-full h-full colorPaletteBackground" onClick={OpenNofiticationCenter}></div>
      <div className=" popupBlockNotification arrow-top">
        <div id="notificationContent relative z-[200]">
          <>
            {users}
          </>
        </div>

      </div>
    </div>
  );
}

export default NotificationCenterModal;
