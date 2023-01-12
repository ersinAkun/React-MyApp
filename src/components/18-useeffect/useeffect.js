import React, { useState } from 'react'
import { Button } from 'react-bootstrap';



const UseEffect = () => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


  return (

    <div>
        <div>{message} - {error}</div>
        <Button variant="info" onClick={()=>setMessage("Hello")}>Set Message</Button>
        <Button variant="danger" onClick={()=>setError("Some errors")}>Throw Error</Button>

    </div>
    
  )
}
export default UseEffect