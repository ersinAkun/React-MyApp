import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import data from "./people.json";
import PersonCard from './person-card';

const Birthday = () => {
    const [people, setPeople] = useState(data);



  return (
    <Container>
        <h1>Bugun Doganlar</h1>
        <p>Bugun dogan {people.length} kisi bulundu</p>

        {people.map((item)=> <PersonCard {...item} key={item.id}/>)}
        <Button variant="danger" onClick={()=> setPeople([])}>
        RemoveAll
        </Button>
        <Button variant="success" onClick={()=> setPeople(data)}>
        Reload Data
        </Button>
    </Container>
  )
}

export default Birthday