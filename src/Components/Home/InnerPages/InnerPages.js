import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import chef1 from '../../../photos/chef1.jpg';
import food1 from '../../../photos/food1.jpg';
import gallery1 from '../../../photos/gallery1.jpg';

const InnerPages = () => {
  return (
    <div style={{ backgroundColor: "teal" }}>
      <div className="text-center p-5">
        <h1>Our Pages</h1>
        <h4>WelCome to our restaurant</h4>
      </div>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <Card style={{ width: "20rem", marginLeft: '5rem', textAlign: 'center', backgroundColor: 'teal', border: '2px solid teal', marginTop: '10px'  }}>
                <Card.Img variant="top" src={chef1} />
                <Card.Body>
                  
                  <Button variant="dark">Meet The Chef</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col >
              <Card style={{ width: "20rem", marginLeft: '5rem', textAlign: 'center', backgroundColor: 'teal', border: '2px solid teal', marginTop: '10px'  }}>
                <Card.Img variant="top" src={food1} />
                <Card.Body>
                  
                  <Button variant="dark">Delicious Menu</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "20rem", marginLeft: '5rem', textAlign: 'center', backgroundColor: 'teal', border: '2px solid teal', marginTop: '10px'  }}>
                <Card.Img variant="top" src={gallery1} />
                <Card.Body>
                  
                  <Button variant="dark">Visit Our Gallery</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default InnerPages;
