import $ from 'jquery';

//show mouse
var setMouse = false;
if (setMouse === true) {document.documentElement.style.setProperty('--cursor-type', 'default');}







// ██████╗ ██╗      █████╗  ██████╗███████╗██╗  ██╗ ██████╗ ██╗     ██████╗ ███████╗██████╗
// ██╔══██╗██║     ██╔══██╗██╔════╝██╔════╝██║  ██║██╔═══██╗██║     ██╔══██╗██╔════╝██╔══██╗
// ██████╔╝██║     ███████║██║     █████╗  ███████║██║   ██║██║     ██║  ██║█████╗  ██████╔╝
// ██╔═══╝ ██║     ██╔══██║██║     ██╔══╝  ██╔══██║██║   ██║██║     ██║  ██║██╔══╝  ██╔══██╗
// ██║     ███████╗██║  ██║╚██████╗███████╗██║  ██║╚██████╔╝███████╗██████╔╝███████╗██║  ██║
// ╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═╝
//
// ████████╗ ██████╗  ██████╗  ██████╗ ██╗     ███████╗
// ╚══██╔══╝██╔═══██╗██╔════╝ ██╔════╝ ██║     ██╔════╝
//    ██║   ██║   ██║██║  ███╗██║  ███╗██║     █████╗
//    ██║   ██║   ██║██║   ██║██║   ██║██║     ██╔══╝
//    ██║   ╚██████╔╝╚██████╔╝╚██████╔╝███████╗███████╗
//    ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
//

var togglePlaceholder = 0;
export const PlaceholderToggle = () => {
  if (togglePlaceholder === 0) {
    document.querySelector("#placeholder-content")?.classList?.add('hidden');
    document.querySelector("#advert-content")?.classList?.add('block');
    document.querySelector("#placeholder-content")?.classList?.remove('block');
    document.querySelector("#advert-content")?.classList?.remove('hidden');
    togglePlaceholder++;
  } else if (togglePlaceholder !== 0) {
    document.querySelector("#placeholder-content")?.classList?.add('block');
    document.querySelector("#advert-content")?.classList?.add('hidden');
    document.querySelector("#placeholder-content")?.classList?.remove('hidden');
    document.querySelector("#advert-content")?.classList?.remove('block');
    togglePlaceholder = 0;
  }

}
var togglePlaceholderModal = 0;
export const PlaceholderModalToggle = () => {
  ColorRender();
  if (togglePlaceholderModal === 0) {
    document.querySelector("#placeholderModal")?.classList?.add("invisible");
      document.querySelector("#placeholderModal")?.classList?.remove("visible");
      togglePlaceholderModal = 1;
  } else if (togglePlaceholderModal === 1) {
    document.querySelector("#placeholderModal")?.classList?.remove("invisible");
    document.querySelector("#placeholderModal")?.classList?.add("visible");
    togglePlaceholderModal = 0;
  }
}

// ██████╗██████╗ ███████╗ █████╗ ████████╗███████╗
// ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔════╝
// ██║     ██████╔╝█████╗  ███████║   ██║   █████╗
// ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██╔══╝
// ╚██████╗██║  ██║███████╗██║  ██║   ██║   ███████╗
// ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
//
// ██████╗  █████╗ ████████╗███████╗
// ██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
// ██║  ██║███████║   ██║   █████╗
// ██║  ██║██╔══██║   ██║   ██╔══╝
// ██████╔╝██║  ██║   ██║   ███████╗
// ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
//



const dateCodeTemplate = `
  <p>
    <span style="color:purple">var</span> <span style="color:blue">countdownDate</span> = {{dateTimeNumber}};
    <br><br>
    <span style="color:purple">var</span> <span style="color:blue">now</span> = <span style="color:purple">new</span> Date().getTime();
    <br><br>
    <span style="color:purple">var</span> <span style="color:blue">distance</span> = countdownDate - now;
    <br><br>
    <span style="color:purple">if</span> (distance < <span style="color:green">0</span>) {
      <br><br>
    &nbsp&nbsp&nbsp&nbsp<span style="color:purple">var</span> <span style="color:blue">element</span> = document.getElementById(<span style="color:red">"replaceWithClass"</span>);
       <br><br>
    {{enableOrDisable}}
       <br><br>
    }
  </p>
`;
const enableCode = `
    <<span>!</span>--Enable Code--><br><br>
    &nbsp&nbsp&nbsp&nbspelement.classList.add(<span style="color:red">"visible"</span>);
       <br><br>
    &nbsp&nbsp&nbsp&nbspelement.classList.remove(<span style="color:red">"invisible"</span>);
`;
const disableCode = `
    <<span>!</span>--Disable Code--><br><br>
    &nbsp&nbsp&nbsp&nbspelement.classList.remove(<span style="color:red">"visible"</span>);
       <br><br>
    &nbsp&nbsp&nbsp&nbspelement.classList.add(<span style="color:red">"invisible"</span>);
`;
const noDateTimeTemplate = `
  <p>No Date-Time has been selected</p>
`;
export const CreateDateCode = (boolean) => {
  //get information from dropdown
  var dateTimeSelector = document.querySelector('input[type="datetime-local"]');
  //find the modal element
  // var htmlDateElementModal = document.querySelector('#contentDateCode');
  //convert date dropdown info into javascript timestamp
  var insertDateTime = dateTimeSelector?.valueAsNumber;
  //create a temp template
  var tempDateTemplate = dateCodeTemplate;
  //replace template with dateTimeNumber
  tempDateTemplate = tempDateTemplate.replace('{{dateTimeNumber}}', insertDateTime);
  //replace template with whether it is enabling or disabling Code
  !boolean
      ? tempDateTemplate = tempDateTemplate.replace('{{enableOrDisable}}', disableCode)
      : tempDateTemplate = tempDateTemplate.replace('{{enableOrDisable}}', enableCode);

  //append the code template to the htmlDateElementModal
  $('#contentDateCode').children().remove();
  !insertDateTime
   ? $('#contentDateCode').append(noDateTimeTemplate)
   : $('#contentDateCode').append(tempDateTemplate);

   TimedDisplayModalToggle();
};

var toggleTimedDisplayModal = 0;
export const TimedDisplayModalToggle = () => {
  if (toggleTimedDisplayModal === 0) {
    document.querySelector("#contentDateModal")?.classList?.add("invisible");
      document.querySelector("#contentDateModal")?.classList?.remove("visible");
      toggleTimedDisplayModal = 1;
  } else if (toggleTimedDisplayModal === 1) {
    document.querySelector("#contentDateModal")?.classList?.remove("invisible");
    document.querySelector("#contentDateModal")?.classList?.add("visible");
    toggleTimedDisplayModal = 0;
  }
}
// ██████╗ ██████╗ ██╗      ██████╗ ██████╗
// ██╔════╝██╔═══██╗██║     ██╔═══██╗██╔══██╗
// ██║     ██║   ██║██║     ██║   ██║██████╔╝
// ██║     ██║   ██║██║     ██║   ██║██╔══██╗
// ╚██████╗╚██████╔╝███████╗╚██████╔╝██║  ██║
// ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝
//
// ██████╗ ███████╗███╗   ██╗██████╗ ███████╗██████╗
// ██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝██╔══██╗
// ██████╔╝█████╗  ██╔██╗ ██║██║  ██║█████╗  ██████╔╝
// ██╔══██╗██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗
// ██║  ██║███████╗██║ ╚████║██████╔╝███████╗██║  ██║
// ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝
//




const colorCodeTemplate = `
  .<span style="color: orange">loader</span> { <br>
  &nbsp&nbsp animation: flash <span style="color: orange">2s</span> infinite; <br>
  }
  <br><br>
  @<span style="color: purple">keyframes</span> flash {<br>
  &nbsp&nbsp0% {<br>
  &nbsp&nbsp&nbsp&nbsp color: <span style="color: orange">{{color1}};</span><br>
  &nbsp&nbsp&nbsp&nbsp background: <span style="color: orange">{{color1}};</span><br>
  &nbsp&nbsp}
  <br><br>
  &nbsp&nbsp50% {<br>
  &nbsp&nbsp&nbsp&nbsp color: <span style="color: orange">{{color2}};</span><br>
  &nbsp&nbsp&nbsp&nbsp background: <span style="color: orange">{{color2}}</span><br>
  &nbsp&nbsp}
  <br><br>
  &nbsp&nbsp100% {<br>
  &nbsp&nbsp&nbsp&nbsp color: <span style="color: orange">{{color1}};</span><br>
  &nbsp&nbsp&nbsp&nbsp background: <span style="color: orange">{{color1}};</span><br>
  &nbsp&nbsp}<br>
  }
`;

$("#colorLoader1").on("input",function () {
  document.documentElement.style.setProperty('--loader1-color', $(this).val());
});
$("#colorLoader2").on("input",function () {
  document.documentElement.style.setProperty('--loader2-color', $(this).val());
});

export const ColorLiveupdate = (event) => {
  if (event.target.id === "colorLoader1") {
    document.documentElement.style.setProperty("--loader1-color", event.target.value);
  }
  else if (event.target.id === "colorLoader2") {
    document.documentElement.style.setProperty("--loader2-color", event.target.value);
  }
};

export const ColorRender = (type) => {
  var tempTemplate = colorCodeTemplate;
  var colorLoad1;
  var colorLoad2;
  if (type === "chosen") {
    colorLoad1 = document.querySelector('#colorLoader1');
    colorLoad2 = document.querySelector('#colorLoader2');
    document.documentElement.style.setProperty('--loader1-color', colorLoad1?.value);
    document.documentElement.style.setProperty('--loader2-color', colorLoad2?.value);
    tempTemplate = tempTemplate.replaceAll('{{color1}}',colorLoad1.value);
    tempTemplate = tempTemplate.replaceAll('{{color2}}',colorLoad2.value);
    $("#colorLoaderModal")?.html(tempTemplate);
  }
  else if (type === "generic") {
    document.documentElement.style.setProperty('--loader1-color', "#E5E6E4");
    document.documentElement.style.setProperty('--loader2-color', "#ECECEB");
    tempTemplate = tempTemplate.replaceAll('{{color1}}',"#E5E6E4");
    tempTemplate = tempTemplate.replaceAll('{{color2}}',"#ECECEB");
    $("#colorLoaderModal")?.html(tempTemplate);
  }
  else if (!type) {
    colorLoad1 = document.documentElement.style.getPropertyValue('--loader1-color')
    colorLoad2 = document.documentElement.style.getPropertyValue('--loader2-color')
    if (!colorLoad1 && !colorLoad2) {
      colorLoad1 = document.querySelector('#colorLoader1').value;
      colorLoad2 = document.querySelector('#colorLoader2').value;
    }
    tempTemplate = tempTemplate.replaceAll('{{color1}}',colorLoad1);
    tempTemplate = tempTemplate.replaceAll('{{color2}}',colorLoad2);
    $("#colorLoaderModal")?.html(tempTemplate);
  }


};
// colorLoaderModal
// #E5E6E4 grey color 1
// #ECECEB grey color 2

// ██████╗  ██████╗ ██████╗ ██╗   ██╗██████╗
// ██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔══██╗
// ██████╔╝██║   ██║██████╔╝██║   ██║██████╔╝
// ██╔═══╝ ██║   ██║██╔═══╝ ██║   ██║██╔═══╝
// ██║     ╚██████╔╝██║     ╚██████╔╝██║
// ╚═╝      ╚═════╝ ╚═╝      ╚═════╝ ╚═╝
//
// ████████╗ ██████╗  ██████╗  ██████╗ ██╗     ███████╗
// ╚══██╔══╝██╔═══██╗██╔════╝ ██╔════╝ ██║     ██╔════╝
//    ██║   ██║   ██║██║  ███╗██║  ███╗██║     █████╗
//    ██║   ██║   ██║██║   ██║██║   ██║██║     ██╔══╝
//    ██║   ╚██████╔╝╚██████╔╝╚██████╔╝███████╗███████╗
//    ╚═╝    ╚═════╝  ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
//


export const PopupDelayTime = (event) => {
  $("#popUpdefaultValue").text(event.target.value+" Seconds");
};

var togglePopup = 0;
export const PopupToggle = () =>  {
  var popupSliderValue = document.querySelector('#popup-slider')?.value;
  var waitAmount = popupSliderValue+'000';
  if (togglePopup === 0) {
    setTimeout(function(){
      var div = document.querySelector("#popupDiv");
      div.classList.add("animate__backInRight");
      div.classList.remove("invisible", "animate__backOutRight");
      togglePopup = 1;
    },waitAmount);
  }
  else if (togglePopup === 1) {
    var div = document.querySelector("#popupDiv");
    div.classList.remove("animate__backInRight");
    div.classList.add("animate__backOutRight");
    togglePopup = 0;
  }
}

// ██████╗  ██████╗ ██████╗ ██╗   ██╗██████╗
// ██╔══██╗██╔═══██╗██╔══██╗██║   ██║██╔══██╗
// ██████╔╝██║   ██║██████╔╝██║   ██║██████╔╝
// ██╔═══╝ ██║   ██║██╔═══╝ ██║   ██║██╔═══╝
// ██║     ╚██████╔╝██║     ╚██████╔╝██║
// ╚═╝      ╚═════╝ ╚═╝      ╚═════╝ ╚═╝
//
//  ██████╗ ██████╗ ██████╗ ███████╗
// ██╔════╝██╔═══██╗██╔══██╗██╔════╝
// ██║     ██║   ██║██║  ██║█████╗
// ██║     ██║   ██║██║  ██║██╔══╝
// ╚██████╗╚██████╔╝██████╔╝███████╗
//  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝


const popUpTemplate = `
  <span style="color: blue">var</span> toggle = <span style="color: darkblue">0</span>;
  <br><span style="color: blue">function</span> <span style="color: darkblue">popupToggle</span>() {
  <br>&nbsp&nbsp<span style="color: blue">if</span> (toggle == <span style="color: darkblue">0</span>) {
  <br>&nbsp&nbsp&nbsp&nbspsetTimeout(<span style="color: blue">function</span>(){
  <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style="color: blue">var</span> div = <span style="color: darkturquoise">document</span>.querySelector(<span style="color: red">"#INPUT-POPUP-ID"</span>);
  <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspdiv.classList.add(<span style="color: lightseagreen">"animate__backInRight"</span>);
  <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspdiv.classList.remove(<span style="color: lightseagreen">"invisible", "animate__backOutRight"</span>);
  <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsptoggle ++;
  <br>&nbsp&nbsp&nbsp&nbsp},{{waitAmount}});
  <br>&nbsp&nbsp}
  <br>&nbsp&nbsp<span style="color: blue">else if</span> (toggle == <span style="color: darkblue">1</span>) {
  <br>&nbsp&nbsp&nbsp&nbsp<span style="color: blue">var</span> div = <span style="color: darkturquoise">document</span>.querySelector(<span style="color: red">"#INPUT-POPUP-ID"</span>);
  <br>&nbsp&nbsp&nbsp&nbspdiv.classList.remove(<span style="color: lightseagreen">"animate__backInRight"</span>);
  <br>&nbsp&nbsp&nbsp&nbspdiv.classList.add(<span style="color: lightseagreen">"animate__backOutRight"</span>);
  <br>&nbsp&nbsp&nbsp&nbsptoggle = <span style="color: darkblue">0</span>;
  <br>&nbsp&nbsp}
  <br>}
`;

export const PopupCode = () =>  {
  var popupSliderValue = document.querySelector('#popup-slider')?.value;
  var tempTemplate = popUpTemplate;
  // contentPopupCode id of modal section to insert html code
  tempTemplate = tempTemplate.replace('{{waitAmount}}',popupSliderValue + "000");
  $("#contentPopupCode").html(tempTemplate);

}

var togglePopupModal = 0;
export const PopupModalToggle = () => {
  PopupCode();
  if (togglePopupModal === 0) {
    document.querySelector("#popupCodeModal")?.classList?.add("invisible");
      document.querySelector("#popupCodeModal")?.classList?.remove("visible");
      togglePopupModal = 1;
  } else if (togglePopupModal === 1) {
    document.querySelector("#popupCodeModal")?.classList?.remove("invisible");
    document.querySelector("#popupCodeModal")?.classList?.add("visible");
    togglePopupModal = 0;
  }
}


// ██████╗ ██████╗  ██████╗ ██╗  ██╗██╗███████╗
// ██╔════╝██╔═══██╗██╔═══██╗██║ ██╔╝██║██╔════╝
// ██║     ██║   ██║██║   ██║█████╔╝ ██║█████╗
// ██║     ██║   ██║██║   ██║██╔═██╗ ██║██╔══╝
// ╚██████╗╚██████╔╝╚██████╔╝██║  ██╗██║███████╗ not really cookies though
// ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝
//
// ███╗   ███╗ ██████╗ ███╗   ██╗███████╗████████╗███████╗██████╗
// ████╗ ████║██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔════╝██╔══██╗
// ██╔████╔██║██║   ██║██╔██╗ ██║███████╗   ██║   █████╗  ██████╔╝
// ██║╚██╔╝██║██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══╝  ██╔══██╗
// ██║ ╚═╝ ██║╚██████╔╝██║ ╚████║███████║   ██║   ███████╗██║  ██║
// ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
//

var originalApi;

export const NotificationCheck = (event, type) => {
  //function to compare things
  function areEqual(array1, array2) {
    if (array1?.length === array2?.length) {
      return array1?.every(element => {
        if (array2?.includes(element)) {

            return true;
        }

        return false;
      });
    }

    return false;
  }

  //get the local storage at the beginning
  var originalLocalStorage = localStorage.getItem('notifications');
  var onlineNotificationList = [];
  // console.log(event);
  // console.log(onlineNotificationList)
  // console.log(originalLocalStorage);
  // console.log(originalApi)

  if (type === 'initialCheck') {
    originalApi = event;
    //run through all the entries
    $.each(originalApi, function(index, value) {
      //create a list of all online notifications
      onlineNotificationList.push(value.id);
    })
    var temp = JSON.parse(originalLocalStorage);
    //check whether they are seen
    var notificationAllSeen = areEqual(onlineNotificationList, temp);
    // console.log(notificationAllSeen);
    // console.log(onlineNotificationList);
    // console.log(temp);


    //check to see if the local storage is populated
    if (!originalLocalStorage) {
      // console.log("no storage")
      //if nothing is in local storage set all notifications to be unseen
      document.querySelector('#newNotification').classList.add('visible');
      document.querySelector('#newNotification').classList.remove('invisible');
    } else if (notificationAllSeen === false) {
      // console.log("false");
      //if nothing is in local storage set all notifications to be unseen
      document.querySelector('#newNotification').classList.add('visible');
      document.querySelector('#newNotification').classList.remove('invisible');
    } else if (notificationAllSeen) {
      //if nothing is in local storage set all notifications to be unseen
      document.querySelector('#newNotification').classList.remove('visible');
      document.querySelector('#newNotification').classList.add('invisible');

    }
  }
  //if clicked
  else if (type === 'onClick') {
    //if there has never been any entries add a temp array
    if (!originalLocalStorage) {originalLocalStorage = "[]";}
    //parse the local storage into a list
    var notificationList = JSON.parse(originalLocalStorage);
    //run through all the entries
    $.each(originalApi, function(index, value) {
      //create a list of all online notifications
      onlineNotificationList.push(value.id);
    })

    //check whether the current id was within the local storage list
    if (notificationList?.indexOf(event) > -1) {
      //the notification was already within the viewed
      return false;
    }
    else {
      //add the id of the currently clicked event to local storage and remove styling
      notificationList.push(event);
      document.querySelector('#id' + event).classList.remove('notificationEntryNew');
      document.querySelector('#id' + event).classList.add('notificationEntrySeen');
      localStorage.setItem('notifications', JSON.stringify(notificationList));
      var originalLocalStorage = localStorage.getItem('notifications');
      var temp = JSON.parse(originalLocalStorage);
      //check whether they are seen
      var notificationAllSeen = areEqual(onlineNotificationList, temp);
      if (!notificationAllSeen) {
        return false;
      }
      else {
        document.querySelector('#newNotification').classList.remove('visible');
        document.querySelector('#newNotification').classList.add('invisible');
      }
    }
  }
  //if openedNotificationCenter
  else if (type === 'openedNotificationCenter') {
    originalLocalStorage = localStorage.getItem('notifications');
    //run through all the entries
    $.each(originalApi, function(index, value) {
      //create a list of all online notifications
      onlineNotificationList.push(value.id);
    })
    //function to compare things
    function areWithin(array1, array2) {
        //check through each element of the local storage and compare to online
        array2.forEach(element => {
          //if it DOESNT find the entry
          if(!array1.includes(element)){
            return false;
          } else{
            //else if it DOES find the entry in the list (notification seen)
            document.querySelector('#id' + element).classList.remove('notificationEntryNew');
            document.querySelector('#id' + element).classList.add('notificationEntrySeen');
          }
        });
    }
    var temp = JSON.parse(originalLocalStorage);
    //check whether they are seen
    if (!temp) {
      return false;
    } else {
      areWithin(onlineNotificationList, temp);
    }
  }
}





// ███╗   ██╗ ██████╗ ████████╗██╗███████╗██╗ ██████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
// ████╗  ██║██╔═══██╗╚══██╔══╝██║██╔════╝██║██╔════╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
// ██╔██╗ ██║██║   ██║   ██║   ██║█████╗  ██║██║     ███████║   ██║   ██║██║   ██║██╔██╗ ██║
// ██║╚██╗██║██║   ██║   ██║   ██║██╔══╝  ██║██║     ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
// ██║ ╚████║╚██████╔╝   ██║   ██║██║     ██║╚██████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
// ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚═╝╚═╝     ╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
//
//  ██████╗███████╗███╗   ██╗████████╗███████╗██████╗
// ██╔════╝██╔════╝████╗  ██║╚══██╔══╝██╔════╝██╔══██╗
// ██║     █████╗  ██╔██╗ ██║   ██║   █████╗  ██████╔╝
// ██║     ██╔══╝  ██║╚██╗██║   ██║   ██╔══╝  ██╔══██╗
// ╚██████╗███████╗██║ ╚████║   ██║   ███████╗██║  ██║
//  ╚═════╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝

var toggleNotification = 0;
export const OpenNofiticationCenter = () => {

  NotificationCheck('', 'openedNotificationCenter');


  //notification function
  var notificationTab = document.querySelector("#notificationCenterDiv");
  var iconActive = document.querySelector(".iconActive");
  var iconNormal = document.querySelector(".iconNormal");
  if (toggleNotification === 0 && toggleColorPalette === 1) {
    OpenColorPalette();
  }
  if (toggleNotification === 0) {
    notificationTab.classList.add("visible");
    notificationTab.classList.remove("invisible");
    iconActive.classList.add("visible");
    iconNormal.classList.add("invisible");
    iconActive.classList.remove("invisible");
    iconNormal.classList.remove("visible");
    toggleNotification++;
  }
  else if (toggleNotification === 1) {
    notificationTab.classList.add("invisible");
    notificationTab.classList.remove("visible");
    iconNormal.classList.add("visible");
    iconActive.classList.add("invisible");
    iconNormal.classList.remove("invisible");
    iconActive.classList.remove("visible");
    toggleNotification = 0;
  }
}




// ███████╗ ██████╗ ███╗   ██╗████████╗
// ██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝
// █████╗  ██║   ██║██╔██╗ ██║   ██║
// ██╔══╝  ██║   ██║██║╚██╗██║   ██║
// ██║     ╚██████╔╝██║ ╚████║   ██║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝   ╚═╝
//
// ██╗   ██╗██████╗ ██████╗  █████╗ ████████╗███████╗██████╗
// ██║   ██║██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
// ██║   ██║██████╔╝██║  ██║███████║   ██║   █████╗  ██████╔╝
// ██║   ██║██╔═══╝ ██║  ██║██╔══██║   ██║   ██╔══╝  ██╔══██╗
// ╚██████╔╝██║     ██████╔╝██║  ██║   ██║   ███████╗██║  ██║
//  ╚═════╝ ╚═╝     ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
//

export const FontSizeTextUpdater = (event) => {
  $("#fontTitle").text(event.target.value+" Rem");
  $("#fontPara").css("font-size", event.target.valueAsNumber+"rem");
};




// ██████╗ ██████╗ ██╗      ██████╗ ██████╗
// ██╔════╝██╔═══██╗██║     ██╔═══██╗██╔══██╗
// ██║     ██║   ██║██║     ██║   ██║██████╔╝
// ██║     ██║   ██║██║     ██║   ██║██╔══██╗
// ╚██████╗╚██████╔╝███████╗╚██████╔╝██║  ██║
// ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝
//
// ██████╗  █████╗ ██╗     ███████╗████████╗████████╗███████╗
// ██╔══██╗██╔══██╗██║     ██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝
// ██████╔╝███████║██║     █████╗     ██║      ██║   █████╗
// ██╔═══╝ ██╔══██║██║     ██╔══╝     ██║      ██║   ██╔══╝
// ██║     ██║  ██║███████╗███████╗   ██║      ██║   ███████╗
// ╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝      ╚═╝   ╚══════╝
//

var toggleColorPalette = 0;
export const OpenColorPalette = () => {
  var colorPaletteModal = document.querySelector("#colorPaletteModal");
  var colorIconActive = document.querySelector(".colorIconActive");
  var colorIconNormal = document.querySelector(".colorIconNormal");
  if (toggleColorPalette === 0 && toggleNotification === 1) {
    OpenNofiticationCenter();
  }
  if (toggleColorPalette === 0) {
    colorPaletteModal.classList.add("visible");
    colorPaletteModal.classList.remove("invisible");
    colorIconActive.classList.add("visible");
    colorIconNormal.classList.add("invisible");
    colorIconActive.classList.remove("invisible");
    colorIconNormal.classList.remove("visible");
    toggleColorPalette++;
  }
  else if (toggleColorPalette === 1) {
    colorPaletteModal.classList.add("invisible");
    colorPaletteModal.classList.remove("visible");
    colorIconNormal.classList.add("visible");
    colorIconActive.classList.add("invisible");
    colorIconNormal.classList.remove("invisible");
    colorIconActive.classList.remove("visible");
    toggleColorPalette = 0;
  }
};


export const ChangeColorPalette = (event) => {
  var themeName;
  if (!event) {
    themeName = localStorage.getItem('theme');
  }
  else if (event) {
    themeName = event;
  }

  if (themeName === 'botanical') {
    document.documentElement.style.setProperty("--colorPalet-container", 'rgb(114 144 141)');
    document.documentElement.style.setProperty("--colorPalet-background", 'rgb(123 156 152)');
    document.documentElement.style.setProperty("--colorPalet-text", 'rgb(233 241 243)');
    document.documentElement.style.setProperty("--colorPalet-header", 'rgb(73 87 85)');
    document.documentElement.style.setProperty("--colorPalet-containerAlt", 'rgb(73 87 85 / 50%)');
    document.documentElement.style.setProperty("--colorPalet-mainLight", 'rgb(196 225 216)');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', themeName);
  }
  else if (themeName === 'normal') {
    document.documentElement.style.setProperty("--colorPalet-container", 'rgb(255 255 255)');
    document.documentElement.style.setProperty("--colorPalet-background", 'rgb(236 236 235)');
    document.documentElement.style.setProperty("--colorPalet-text", 'rgb(0 0 0)');
    document.documentElement.style.setProperty("--colorPalet-header", 'rgb(255 255 255)');
    document.documentElement.style.setProperty("--colorPalet-containerAlt", 'rgb(38 57 77 / 50%)');
    document.documentElement.style.setProperty("--colorPalet-mainLight", 'rgb(105, 182, 213)');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', themeName);
  }
  else if (themeName === 'witchgirl') {
    document.documentElement.style.setProperty("--colorPalet-container", 'rgb(231 200 190)');
    document.documentElement.style.setProperty("--colorPalet-background", 'rgb(243 219 218)');
    document.documentElement.style.setProperty("--colorPalet-text", 'rgb(86 120 106)');
    document.documentElement.style.setProperty("--colorPalet-header", 'rgb(220 180 167)');
    document.documentElement.style.setProperty("--colorPalet-containerAlt", 'rgb(220 180 167 / 50%)');
    document.documentElement.style.setProperty("--colorPalet-mainLight", 'rgb(214 241 222)');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', themeName);
  }
  else if (themeName === 'alpine') {
    document.documentElement.style.setProperty("--colorPalet-container", 'rgb(118 115 140)');
    document.documentElement.style.setProperty("--colorPalet-background", 'rgb(108 104 127)');
    document.documentElement.style.setProperty("--colorPalet-text", 'rgb(255 255 255)');
    document.documentElement.style.setProperty("--colorPalet-header", 'rgb(119 115 140)');
    document.documentElement.style.setProperty("--colorPalet-containerAlt", 'rgb(119 115 140 / 50%)');
    document.documentElement.style.setProperty("--colorPalet-mainLight", 'rgb(201 193 245)');
    localStorage.removeItem('theme');
    localStorage.setItem('theme', themeName);
  }


};
