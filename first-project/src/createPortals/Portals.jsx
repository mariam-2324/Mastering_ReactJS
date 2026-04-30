import { useState } from "react"
import {Modal} from "react"

export default function Portals() {

    const [open, setOpen] = useState(false)
    return (
        <div style={{alignItems: "center", margin: "100px"}}>
            <button onClick={() => setOpen(true)}>Open Modal</button>

            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <h3>This is a Modal Statement</h3>
                <p>A simple Modal statement without context.</p>

            </Modal>
       </div>

    )
}






