import Carousel from 'react-bootstrap/Carousel';

export const ViewResult = (props) => {
  return (
    <>
        <Carousel data-bs-theme="dark" fade slide={true}>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src="https://cdn.britannica.com/66/132266-050-2B03F468/Rainbow-Bridge-shore-Tokyo-Bay-Japan.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="t-primary">New York</h5>
          <p className="t-primary">This city had lost 13% of landing area</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src="https://rare-gallery.com/uploads/posts/4575250-rio-de-janeiro-cityscape-hills-long-exposure-wires-boat-sea-brazil.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="t-primary">Rio de Janeiro</h5>
          <p className="t-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src="https://m.media-amazon.com/images/I/81Ms4D9UHsL.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="t-primary">Tokyo</h5>
          <p className="t-primary">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
