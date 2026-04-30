import React, { useState } from 'react'

export default function Array_In_State() {
    const [list, setList] = useState (["learn", "practice", "test"])

    const handleList = () => {
        setList([...list, "projects"])
    }
  return (
    <>
    {list.map((l, index) => {
        return (
            <li>{l}</li>
        )
        
    })}
    <button onClick={handleList}>User List</button>
    </>
  )
}
