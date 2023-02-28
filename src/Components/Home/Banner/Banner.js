import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../../photos/pic1.jpg";
import pic2 from "../../../photos/pic2.jpg";
import pic3 from "../../../photos/pic3.jpg";

const Banner = () => {
  const imageDesign = {
    height: "800px",
  };
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={imageDesign}
            className="d-block w-100 img-fluid"
            src={pic1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imageDesign}
            className="d-block w-100 img-fluid"
            src={pic2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={imageDesign}
            className="d-block w-100 img-fluid"
            src={pic3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
