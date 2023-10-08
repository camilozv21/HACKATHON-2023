import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselPlot = () => {
  const vec = ['lat vs rad_surf_type.jpg', 'lat vs ecmwf_meteo_map_avail.jpg', 'lat vs trailing_edge_variation_flag.jpg', 'lat vs ice_flag.jpg', 'lat vs alt.jpg', 'lat vs range.jpg', 'lat vs model_dry_tropo_corr.jpg', 'lat vs rad_wet_tropo_corr.jpg', 'lat vs iono_corr_gim.jpg', 'lat vs sea_state_bias.jpg', 'lat vs swh.jpg', 'lat vs sig0.jpg', 'lat vs mean_sea_surface_sol1.jpg', 'lat vs mean_topography.jpg', 'lat vs bathymetry.jpg', 'lat vs inv_bar_corr.jpg', 'lat vs hf_fluctuations_corr.jpg', 'lat vs ocean_tide_sol2.jpg'];

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
              <h5 className="t-primary">{imageName}</h5>
              {/* Puedes agregar más información si lo deseas */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
