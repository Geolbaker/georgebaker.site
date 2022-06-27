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
    <div id="notificationCenterDiv" className="container fixed m-5 py-16 invisible right-0 top-[0.5rem] z-[2000] sm:!w-[55%] md:!w-[35%] " style={{width: "calc(100% - 2.5rem)"}}>
    <div className="fixed w-full h-full colorPaletteBackground" onClick={OpenNofiticationCenter}></div>
      <div className=" popupBlockNotification rounded-lg drop-shadow-md arrow-top h-full overflow-auto md:h-auto">
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
