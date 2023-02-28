import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import breakfast1 from "../../../photos/breakfast1.jpg";
import appetizer1 from "../../../photos/appetizer1.jpg";
import drinks1 from "../../../photos/drinks1.jpg";

const MainCourse = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div className="text-center p-5">
        <h5>FLAVOR FOR ROYALTY</h5>
        <hr />
        <h1 className="mt-5 mb-3">We offer Top Notch</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry lorem Ipsum has been the industries <br />{" "}
          standard dummy text ever.
        </p>
      </div>

      <Container>
        <Row>
          <Col>
            <Card
              style={{
                width: "22rem",
                backgroundColor: "black",
              }}
            >
              <Card.Img  variant="top" src={breakfast1} />
              <Card.Body>
                <Button
                  style={{
                    backgroundColor: "black",
                    border: "none",
                  }}
                >
                  Breakfast
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "22rem",
                backgroundColor: "black",
                paddingTop: '4rem'
              }}
            >
              <Card.Img className="mt-5" variant="top" src={appetizer1} />
              <Card.Body>
                <Button
                  style={{
                    backgroundColor: "black",
                    border: "none",
                  }}
                >
                  Appetizer
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{
                width: "22rem",
                backgroundColor: "black",
              }}
            >
              <Card.Img variant="top" src={drinks1} />
              <Card.Body>
                <Button
                  style={{
                    backgroundColor: "black",
                    border: "none",
                  }}
                >
                  Drinks
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainCourse;
