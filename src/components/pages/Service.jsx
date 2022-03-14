import { useParams } from "react-router-dom"
import NotFound from "./NotFound"

export default function Service({ services }) {
  const { id } = useParams()
  const service = services.find(service => service.id.toString() === id)
  if(!service) return <NotFound />
  return(
    <div>
      <h3>{service.name}</h3>

      <h6>{service.price}</h6>

      <p>{service.description}</p>
    </div>
  )
}