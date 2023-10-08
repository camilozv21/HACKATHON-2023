import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';
import bg11 from '../assets/bg11.png';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" fade slide={true}>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src={bg1}
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
          src={bg2}
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
          src={bg3}
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
  );
}

export default DarkVariantExample;