import React, { useState } from "react";

function About(){
    const [count,setCount] = useState(0)
    return(
        <>
        <h1>About${count}</h1>
        </>
    )
}
export default About;