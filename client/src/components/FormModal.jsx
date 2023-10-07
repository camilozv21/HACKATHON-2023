import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function FormModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex justify-content-center align-items-center p-5 box-upload'>
      <button variant="primary" onClick={handleShow} className='btn btn-primary'>
      Create a new GeoAnalysis
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create a new GeoAnalysis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="" onSubmit={onsubmit}>
                    <div className="mb-3">
                        <label className="form-label">Choose your preferred methodology</label>
                        <select className="form-select" id="methodology">
                            <option value="clustering">Plot</option>
                            <option value="clustering">Clustering</option>
                            <option value="correlation">Correlation</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Select Your Data File CSV, HDF or TXT</label>
                        <input type="file" className="form-control" id="file"/>
                    </div>
                    <button type="submit" data-bs-dismiss="modal" className="btn btn-primary">Submit</button>
                </form>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}

export default FormModal;
