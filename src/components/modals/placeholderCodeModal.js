
function PlaceholderCodeModal(){
  return (
    <div className="modal" id="placeholderModal" tabIndex="-1" role="dialog" aria-labelledby="placeholderModal" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Placeholder Code</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body overflow-scroll">
          <p id="colorLoaderModal">


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

export default PlaceholderCodeModal;
