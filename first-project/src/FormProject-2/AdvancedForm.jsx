import { useState } from "react";

export default function AdvancedForm() {
  const [formData, setFormData] = useState({
    gender: "",
    agreement: false,
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted successfully", {formData});
    
  }

  const handleChange = (e) => {
    const {name, type, value, checked} = e.target;
    setFormData(prevstate => ({
      ...prevstate,
      [name]: type === "checkbox"? checked : value
    }))
  }


  return (
    <>
    <div style={{color: "cadetblue", display: "flex", justifyContent: "center", marginTop: "100px"}}>
      <h2>Advanced Form Handling Using Checkbox, selectbox, radio button</h2>
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="gender">
          <p>Gender:</p>
        <input
          type="radio"
          value="male"
          name="gender"
          checked={formData.gender === "male"}
          onChange={handleChange}
        />
        Male
        </label>
        <br />
        <label htmlFor="gender">
        <input
          type="radio"
          value="female"
          name="gender"
          checked={formData.gender === "female"}
          onChange={handleChange}
        />
        Female
        </label>
        <br /><br/>
        <p>Residence:</p>
        <label htmlFor="country">Country</label>
        <select name="country" value={formData.country} onChange={handleChange}>
          <option value="USA">USA</option>
          <option value="Dubai">Dubai</option>
          <option value="UK">UK</option>
        </select>
        <br />
        <br />
        <label htmlFor="agreement">
          <p>Agreement:</p>
        <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange}/>
        I agree the terms and conditions of the above mentioned statement.
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
      </>
    
  );
}
