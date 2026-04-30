import { useState, useEffect, React } from 'react'

export default function WindowSizeTracker() {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Unsubscribed from resize event.");
            
        }
    }, [])

    
  return (
    <>
    <h3>WindowSizeTracker</h3>
    <p>Current Width: {width}</p>
    </>
  )
}
