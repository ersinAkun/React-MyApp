import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserCard from "./user-card";


const UserCards = () => {
    const [users,setUsers] = useState([]);

    fetch("https://63c2f122e3abfa59bdb61a89.mockapi.io/api/v1/users")
    .then((resp) => resp.json())
    .then((data) => setUsers(data));


  return (
    <Container>
      <Row>
        {users.map(user=>(
            <Col key = {user.id}>
            <UserCard {...user}/>
          </Col>
        ) )}
        
      </Row>
    </Container>
  );
};
export default UserCards;