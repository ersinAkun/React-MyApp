import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";


const PersonCard = ({ image, name, age }) => {
  return (
    <Card claassName="mb-4" style={{position:"relative"}}>
      <Row>
        <Col md={2}>
          <Card.Img src={require(`./images/${image}`)} />
        </Col>
        <Col md={10}>
          <Card.Body>
            <Card.Title className="fs-1">{name}</Card.Title>
            <Card.Subtitle className="fs-3">{age} 
            
            </Card.Subtitle>
          </Card.Body>
        </Col>
      </Row>
      <span className="position-absolute end-0 bottom-0"><FaTrash/></span>
    </Card>
  );
};
export default PersonCard;