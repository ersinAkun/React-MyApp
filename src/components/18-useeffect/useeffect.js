import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


const UseEffect = () => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    console.log("Bu satır render ve re-render durumlarında ve alttaki return kısmı render edilmeden önce çalıştırılır");


    useEffect( ()=> {
        console.log(`
            MOUNTING: Bu satır sadece render durumunda çalışır.
            Ancak re-render larda çalışmaz.
        `)
    }, []);

    
  return (
    <div>
        <div>{message} - {error}</div>
        <Button variant="info" onClick={()=>setMessage("Hello")}>Set Message</Button>
        <Button variant="danger" onClick={()=>setError("Some errors")}>Throw Error</Button>
    </div>
  )
}
export default UseEffect