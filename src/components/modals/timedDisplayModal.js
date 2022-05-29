
function TimedDisplayModal(){
  return (
    <div className="modal mt-5" id="contentDateModal" tabIndex="-1" role="dialog" aria-labelledby="contentDateModal" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Timed Display Enabler or Disable Code</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body overflow-scroll">
          <p id="contentDateCode">

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

export default TimedDisplayModal;
