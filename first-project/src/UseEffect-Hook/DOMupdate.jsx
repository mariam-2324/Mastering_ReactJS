import { useState, useEffect, React } from 'react'

export default function DOMupdate() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count: ${count}`
        console.log("Re-rendered the component");
        
    }, [count]);
  return (
    <>
    <div>DOMupdate: {count}</div>
    <button onClick={() => {setCount((prev) => prev + 1)}}>Click</button>
    </>
  )
}
