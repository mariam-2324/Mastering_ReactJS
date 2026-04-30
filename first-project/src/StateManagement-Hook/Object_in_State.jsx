import { useState, React } from 'react';

export const ObjectState = () => {
    
    const [val, setVal] = useState({firstName: "Sara", lastName: "Khan"})

    const handleValues = () => {
        setVal({...val, lastName: "Sahil"})
    }
return (
    <>
    <h4>First name is {val.firstName}, and last name is {val.lastName}</h4>
    <button onClick={handleValues}>Click it</button>
    </>

    )
}

