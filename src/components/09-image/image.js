import React from 'react'
import northernLights from "../../assets/img/image1.jpg";


const Image = () => {
  return (
    <div>

        {/**external URL */}    
        <img src="https://images.unsplash.com/photo-1672572305595-c0a319dc09f3?ixlib=rb-4.0.3&ixid=MnwxM[…]G90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" width="500"/>

        {/*statik yontemde goruntuler public klasoru icinde aranir*/}
    <img src="assets/img/car.jpg" alt="" width="500"/>


        {/**import ve reuire */}
    <img src={northernLights} alt="" width="500"/>

    </div>
  )
}

export default Image