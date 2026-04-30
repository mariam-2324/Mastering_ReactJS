import React, { useEffect, useState } from 'react'

export default function FetchAPI() {
    const [apis, setApis] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(json => setApis(json))
        
        }, [])
  return (
    <>
    <h4>User List</h4>
    {apis.map((u) => (
        <li key={u.id}>{u.id} - {u.name}</li>
    ))}
    </>
  )
}
