import React, { useState } from 'react'

export default function MultiFormHandling() {

    const [formData, setFormData] = useState({
                                       name:"",
                                       email:"",
                                       age:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input id="name" name='name' type="text" autoComplete="on" placeholder="Name" value={formData.name} onChange={handleChange} />
            <br/><br/>
            <label htmlFor="email">Email:</label>
            <input id="email" name='email' type="email" autoComplete="on" placeholder="Email" value={formData.email} onChange={handleChange} />
            <br/><br/>
            <label htmlFor="age">Age:</label>
            <input id="age" name='age' type="number" autoComplete="on" placeholder="Age" value={formData.age} onChange={handleChange} />
            <br/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
