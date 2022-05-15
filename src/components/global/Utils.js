// Open Notification Center Toggle
var toggleNotification = 0;
export const OpenNofiticationCenter = () => {
  var notificationTab = document.querySelector("#notificationCenterDiv");
  if (toggleNotification == 0) {
    notificationTab.classList.add("d-block");
    notificationTab.classList.remove("d-none");
    toggleNotification++;
  }
  else if (toggleNotification == 1) {
    notificationTab.classList.add("d-none");
    notificationTab.classList.remove("d-block");
    toggleNotification = 0;
  }
}
