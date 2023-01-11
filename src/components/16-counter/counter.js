import React, {useState} from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";
import {GrPowerReset} from "react-icons/gr";


const Counter = () => {
    const [counter, setCounter] = useState(0);

  return (

    <ButtonGroup aria-label="Basic example">
      <Button variant="info" onClick={()=> setCounter(5)}><AiOutlinePlusCircle/></Button>
      <Button variant="light" disabled>{counter}</Button>
      <Button variant="warning"><AiOutlineMinusCircle/></Button>
      <Button variant="danger"><GrPowerReset/></Button>
    </ButtonGroup>

  );
};
export default Counter;