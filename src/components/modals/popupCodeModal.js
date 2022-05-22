
function PopupCodeModal(){
  return (

  <div className="modal" id="popupCodeModal" tabIndex="-1" role="dialog" aria-labelledby="popupCodeModal" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Timed Popup Code</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body overflow-scroll">
          <p id="contentPopupCode">

          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PopupCodeModal;
