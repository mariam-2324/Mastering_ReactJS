import React from 'react'

export default function WithStyle(WrappedComponent) {
  return function NewComponent(props){
    return (
    <div style={{color: "greenyellow", fontFamily: "monospace"}}>
      <WrappedComponent{...props} />
    </div>
  )
  }
  
}

