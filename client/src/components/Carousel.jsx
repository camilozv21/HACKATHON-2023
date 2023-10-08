import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../assets/bg1.png';
import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" fade slide={true} interval={1500}>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src={bg1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src={bg2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caurosel-img"
          src={bg3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;