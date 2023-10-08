import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast'; 
import ToastContainer from 'react-bootstrap/ToastContainer';

export const CarouselPlot = () => {
  const [show, setShow] = useState(false);

  const vec = [
  'lat vs pole_tide.jpg',
  'lat vs rad_liquid_water.jpg',
  'lat vs alt_dyn.jpg',
  'lat vs xover_corr.jpg',
  'lon vs surface_type.jpg',
  'lon vs alt.jpg',
  'lon vs model_dry_tropo_corr.jpg',
  'lon vs iono_corr_gim.jpg',
  'lon vs mean_topography.jpg',
  'lon vs bathymetry.jpg',
  'lon vs solid_earth_tide.jpg',
  'lon vs pole_tide.jpg',
  'lon vs rad_liquid_water.jpg',
  'lon vs alt_dyn.jpg',
  'lon vs xover_corr.jpg',
  'surface_type vs alt.jpg',
  'ecmwf_meteo_map_avail vs pole_tide.jpg',
  ];
  

  return (
    <>
      <Carousel data-bs-theme="dark" fade slide={true} interval={1000} className='caurosel_data p-5'>
        {vec.map((imageName, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 caurosel-img"
              src={`http://localhost:4000/database/data/image/correlation/${imageName}`}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <h5 className="t-caption">{imageName}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="d-grid gap-2 pb-5 button-div m-auto">
      <Button variant="primary" size="lg" onClick={() => setShow(true)}>
        Dowload your charts
      </Button>
    </div>
    <ToastContainer position="bottom-start" className="p-3 m-3" style={{ zIndex: 1 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
            <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
            />
            <strong className="me-auto">Dowload</strong>
            <small>0 mins ago</small>
            </Toast.Header>
            <Toast.Body>Dowloading your content</Toast.Body>
        </Toast>
    </ToastContainer>
    </>
  );
};
