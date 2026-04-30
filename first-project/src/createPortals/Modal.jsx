import React from 'react'
import {createPortal} from 'react-dom'
export default function Modal(isOpen, onClose, children) {
    if(!isOpen) return null;  
  return createPortal(
    <div style={styles.overlay}>
        <div style={styles.modal}>
            {children}
            <button style={styles.btn} onClick={onClose}>Close Modal</button>

        </div>
    </div>,
    document.querySelector('#modal-root')
    
  )

  }
  const styles = {
    overlay:{
        position: "fixed",
        inset: 0,
        background: 'rgba (0,0,0,0.5)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    modal: {
        margin: '100px',
        padding: '100px',
        borderRadius: "20px",

    },
    btn: {
        margin: '20px',
        padding: '20px',
        color: 'white',
        background: 'blue',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
    }

  }
