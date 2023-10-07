import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function FormModal() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFile = (event) => {
    setFile(event.target.files[0])
  }
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/process', {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();
      console.log(result);
      handleClose()
    } catch (error) {
      handleClose()
      console.error('Error al subir el archivo', error);
    }
  }

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
        <form action="" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Choose your preferred methodology</label>
                        <select className="form-select" id="methodology" name='methodology'>
                            <option value="plot">Plot</option>
                            <option value="clustering">Clustering</option>
                            <option value="correlation">Correlation</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Select Your Data File CSV, HDF or TXT</label>
                        <input type="file" className="form-control" id="file" name='file' onChange={handleFile} />
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
