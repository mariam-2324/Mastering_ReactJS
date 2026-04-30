import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();

    const gotoabout = () => {
        navigate("/about")
    }
  return (
    <div>
        <h2 style={{color: "red", textAlign: "center"}}>Welcome to Home page.</h2>
        <button onClick={gotoabout}>Go To About</button>
    </div>
  )
}
