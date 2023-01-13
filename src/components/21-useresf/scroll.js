import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./scroll.scss";


const Scroll = () => {
  const refAboutUs = useRef(null);
  console.log(refAboutUs);

  return (
    
    <Container>
      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          quisquam aspernatur debitis asperiores iusto est beatae odio, dolore
          laborum vel eius, obcaecati maxime? Repellendus maiores deleniti illum
          magnam nostrum obcaecati. Corrupti officiis explicabo consectetur
          magni ratione dolores, qui consequuntur totam quisquam ea quaerat.
          Dolorum iusto perspiciatis facilis quod autem eaque laudantium iste
          iure cumque, culpa unde vero maiores? Nesciunt, repudiandae?
        </p>
      ))}
      <p className="about-us" ref={refAboutUs}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        quisquam aspernatur debitis asperiores iusto est beatae odio, dolore
        laborum vel eius, obcaecati maxime? Repellendus maiores deleniti illum
        magnam nostrum obcaecati. Corrupti officiis explicabo consectetur magni
        ratione dolores, qui consequuntur totam quisquam ea quaerat. Dolorum
        iusto perspiciatis facilis quod autem eaque laudantium iste iure cumque,
        culpa unde vero maiores? Nesciunt, repudiandae?
      </p>
      {[...new Array(15)].map((item, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          quisquam aspernatur debitis asperiores iusto est beatae odio, dolore
          laborum vel eius, obcaecati maxime? Repellendus maiores deleniti illum
          magnam nostrum obcaecati. Corrupti officiis explicabo consectetur
          magni ratione dolores, qui consequuntur totam quisquam ea quaerat.
          Dolorum iusto perspiciatis facilis quod autem eaque laudantium iste
          iure cumque, culpa unde vero maiores? Nesciunt, repudiandae?
        </p>
      ))}
    </Container>
  );
};
export default Scroll;