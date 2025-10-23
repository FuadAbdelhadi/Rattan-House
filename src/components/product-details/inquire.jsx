


const Inquire = ({ show, onClose, title, children }) => {
  if (!show) return null; // don’t render if not visible

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {/* <div className="modal-header justify-content-end border-0">
          <button className="close-btn" onClick={onClose}>
            &times;
          </button>
        </div> */}
        <div className="modal-body p-5 text-end">
          {children}
        </div>
      </div>
    </div>
  );
};


export default Inquire;
