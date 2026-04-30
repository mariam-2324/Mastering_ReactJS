import { useParams } from 'react-router-dom'

export default function User() {
  const {id} = useParams()
  return <h3 style={{color: "brown", textAlign: "center"}}>User Profile Id : {id}</h3>
}
