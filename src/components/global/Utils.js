import $ from 'jquery';

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
    document.querySelector("#placeholder-content")?.classList?.add('d-none');
    document.querySelector("#advert-content")?.classList?.add('d-flex');
    document.querySelector("#placeholder-content")?.classList?.remove('d-flex');
    document.querySelector("#advert-content")?.classList?.remove('d-none');
    togglePlaceholder++;
  } else if (togglePlaceholder !== 0) {
    document.querySelector("#placeholder-content")?.classList?.add('d-flex');
    document.querySelector("#advert-content")?.classList?.add('d-none');
    document.querySelector("#placeholder-content")?.classList?.remove('d-none');
    document.querySelector("#advert-content")?.classList?.remove('d-flex');
    togglePlaceholder = 0;
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
  var notificationTab = document.querySelector("#notificationCenterDiv");
  var iconActive = document.querySelector(".iconActive");
  var iconNormal = document.querySelector(".iconNormal");
  if (toggleNotification === 0) {
    notificationTab.classList.add("d-block");
    notificationTab.classList.remove("d-none");
    iconActive.classList.add("d-block");
    iconNormal.classList.add("d-none");
    iconActive.classList.remove("d-none");
    iconNormal.classList.remove("d-block");
    toggleNotification++;
  }
  else if (toggleNotification === 1) {
    notificationTab.classList.add("d-none");
    notificationTab.classList.remove("d-block");
    iconNormal.classList.add("d-block");
    iconActive.classList.add("d-none");
    iconNormal.classList.remove("d-none");
    iconActive.classList.remove("d-block");
    toggleNotification = 0;
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
    &nbsp&nbsp&nbsp&nbspelement.classList.add(<span style="color:red">"d-block"</span>);
       <br><br>
    &nbsp&nbsp&nbsp&nbspelement.classList.remove(<span style="color:red">"d-none"</span>);
`;
const disableCode = `
    <<span>!</span>--Disable Code--><br><br>
    &nbsp&nbsp&nbsp&nbspelement.classList.remove(<span style="color:red">"d-block"</span>);
       <br><br>
    &nbsp&nbsp&nbsp&nbspelement.classList.add(<span style="color:red">"d-none"</span>);
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
};

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
  if (type === "chosen") {
    var tempTemplate = colorCodeTemplate;
    var colorLoad1 = document.querySelector('#colorLoader1');
    var colorLoad2 = document.querySelector('#colorLoader2');
    console.log(colorLoad1.value);
    document.documentElement.style.setProperty('--loader1-color', colorLoad1?.value);
    document.documentElement.style.setProperty('--loader2-color', colorLoad2?.value);
    tempTemplate = tempTemplate.replaceAll('{{color1}}',colorLoad1.value);
    tempTemplate = tempTemplate.replaceAll('{{color2}}',colorLoad2.value);
    $("#colorLoaderModal")?.html(tempTemplate);
  }
  else if (type === "generic") {
    document.documentElement.style.setProperty('--loader1-color', "#E5E6E4");
    document.documentElement.style.setProperty('--loader2-color', "#ECECEB");
    var tempTemplate = colorCodeTemplate;
    tempTemplate = tempTemplate.replaceAll('{{color1}}',"#E5E6E4");
    tempTemplate = tempTemplate.replaceAll('{{color2}}',"#ECECEB");
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


$("#popup-slider").on("input",function () {
      $("#popUpValue").text($(this).val()+" Seconds");
    });

var togglePopup = 0;
export const PopupToggle = () =>  {
  var popupSliderValue = document.querySelector('#popup-slider')?.value;
  var waitAmount = popupSliderValue+'000';
  if (togglePopup === 0) {
    setTimeout(function(){
      var div = document.querySelector("#popupDiv");
      div.classList.add("animate__backInRight");
      div.classList.remove("d-none", "animate__backOutRight");
      togglePopup ++;
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
  <br>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspdiv.classList.remove(<span style="color: lightseagreen">"d-none", "animate__backOutRight"</span>);
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
