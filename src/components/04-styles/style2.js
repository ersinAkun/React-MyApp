import React from 'react'



const Style2 = () => {

    const styleTitle = {
        fontSize:"2rem",
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    }

  return (

    <div>
        <h2 style={styleTitle}>JSX Loops</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quisquam a labore ipsum. Vero, impedit veniam dolore laudantium explicabo architecto laboriosam ex quos molestias ad voluptates ipsam nobis obcaecati pariatur!</p>
    
        <h2 style={{...styleTitle, color:"blue"}}>Component Props</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quisquam a labore ipsum. Vero, impedit veniam dolore laudantium explicabo architecto laboriosam ex quos molestias ad voluptates ipsam nobis obcaecati pariatur!</p>
  
    </div>

  )
}

export default Style2