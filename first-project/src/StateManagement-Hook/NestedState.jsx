import React, { useState } from 'react'

export default function NestedState() {
    const [nest, setNest] = useState({firstName: "Saira", lastName: "Khan", Address:{city: "Karachi", Area: "Malir"}})

    const handleClick = () =>{
        setNest({...nest, Address:{city: "Islamabad"}})
    }
  return (
    <>
   <ul>
    <li>previous Data: {nest.firstName}</li>
    <li>Last Name: {nest.lastName}</li>
    <li>Nested_State Data : {nest.Address.city}</li>
    
    </ul>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}
