import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {GrPowerReset} from "react-icons/gr";
const Counter = () => {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="info"><AiOutlinePlusCircle/></Button>
      <Button variant="light" disabled>Middle</Button>
      <Button variant="warning"><AiOutlineMinusCircle/></Button>
      <Button variant="danger"><GrPowerReset/></Button>
    </ButtonGroup>
  );
};
export default Counter;