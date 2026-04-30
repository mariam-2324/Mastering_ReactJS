import { useState } from "react";

export default function SimpleFormHandling() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Name: ", name);
        console.log("Email: ", email);
    }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "100px"}}>
    <form onSubmit={handleClick}>
        <h2>Simple Form Handling</h2>

        <label htmlFor="simpleName">Name:</label>
        <input id="simpleName" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/><br/>

        <label htmlFor="simpleEmail">Email:</label>
        <input id="simpleEmail" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/><br/>
        <button type='submit'>Submit</button>
    </form>
    </div>
  );
}
