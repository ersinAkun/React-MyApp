import React from "react";
import { Button, Card } from "react-bootstrap";
const Product = (props) => {
  const { image, desc, title, price } = props;
  return (
    <Card>
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body className="text-center">
        <Card.Title className="fs-2">{title}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text className="fs-3 text-info"><strong>${price}</strong></Card.Text>
        <Button variant="warning">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};
export default Product;
