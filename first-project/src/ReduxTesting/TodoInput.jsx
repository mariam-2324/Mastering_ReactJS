import React, { useState } from 'react'

export default function TodoInput() {
  const [input, setInput] = useState("")
  console.log(input);
  


  return (
    <>
    <div className='flex justify-center gap-2'>
        <input type="text" className='bg-slate-300 p-2 rounded-lg w-[300px]' placeholder='Add Task...' value={input} onChange={(e) => setInput(e.target.value)}/>

        <button className='bg-red-600 text-white px-4 rounded-lg cursor-pointer' >➕</button>
    </div>
    </>
  )
}
