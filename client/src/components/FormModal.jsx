import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate desde react-router-dom
import Modal from 'react-bootstrap/Modal';

function FormModal() {
  const navigate = useNavigate(); // Obtiene la instancia de useNavigate
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [methodology, setMethodology] = useState('plot');
  const [clusterCount, setClusterCount] = useState(2);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleMethodologyChange = (event) => {
    setMethodology(event.target.value);
  };

  const handleClusterCountChange = (event) => {
    setClusterCount(event.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('methodology', methodology);
    formData.append('clusterCount', clusterCount);

    navigate(`/result/6522ab80986aad3d4d3bda49`);
    handleClose();
    try {
      await fetch('https://hackathon-2023-beryl.vercel.app/api/process', {
        method: 'POST',
        body: formData,
      });
    } catch (error) {
      console.error('Error al subir el archivo', error);
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center p-5 box-upload'>
        <button variant="primary" onClick={handleShow} className='btn btn-primary p-4 btn-txt'>
          Create a New GeoAnalysis
        </button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Create a new GeoAnalysis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">Choose your preferred methodology</label>
                <select className="form-select" id="methodology" name='methodology' value={methodology} onChange={handleMethodologyChange}>
                  <option value="plot">Plot</option>
                  <option value="clustering">Clustering</option>
                  <option value="correlation">Correlation</option>
                </select>
              </div>

              {methodology === 'clustering' && (
                <div className="mb-3">
                  <label className="form-label">Number of Clusters</label>
                  <input type="number" className="form-control" id="clusterCount" name='clusterCount' value={clusterCount} onChange={handleClusterCountChange} />
                </div>
              )}

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
