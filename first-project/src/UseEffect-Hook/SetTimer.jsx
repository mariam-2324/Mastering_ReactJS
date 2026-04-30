import { useState, useEffect, React } from 'react'

export default function SetTimer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev +1)
            
        }, 1000);
        return () => {
            clearInterval(interval)
            console.log("Timer Cleared");
            
        }
    }, [])
    
  return (
    <div>Seconds: {seconds}</div>
  )
}
