import Carousel from 'react-bootstrap/Carousel';

export const CarouselPlot = (props) => {

  return (
    <>
        <Carousel data-bs-theme="dark" fade slide={true}>
            <Carousel.Item>
                {/* <img
                className="d-block w-100 caurosel-img"
                src={`https://hackathon-2023-udov.vercel.app/${props.imag}`}
                alt="First slide"
                /> */}
                <Carousel.Caption>
                <h5 className="t-primary">New York</h5>
                <p className="t-primary">This city had lost 13% of landing area</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
  )
}
