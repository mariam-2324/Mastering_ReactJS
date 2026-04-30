import React, { useState } from 'react'

export default function BasicValidationForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email){
            setError("All fields must be required")
        }else{
            setError("")
            console.log("Your Data:", {name, email});
            
            alert("Form Submitted Successfully.")
        }
    }

  return (
    <div>
        <h2 style={{color: "coral", textAlign: "center", marginTop: "100px"}}>Basic Validation of Form:</h2>
        <form onSubmit={handleSubmit} style={{color: "cornflowerblue", textAlign: "center", marginTop: "80px"}}>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br/><br/>
            <label htmlFor="email">Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br/><br/>
            <button type='submit'>Submit</button>
            <br/><br/>
            {error && <p style={{color: "red"}}>{error}</p>}

        </form>
    </div>
  )
}
