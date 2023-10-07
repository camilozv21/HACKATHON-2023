import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src="https://cdn.britannica.com/66/132266-050-2B03F468/Rainbow-Bridge-shore-Tokyo-Bay-Japan.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="t-primary">First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src="https://rare-gallery.com/uploads/posts/4575250-rio-de-janeiro-cityscape-hills-long-exposure-wires-boat-sea-brazil.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="t-primary">Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src="https://m.media-amazon.com/images/I/81Ms4D9UHsL.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="t-primary">Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;