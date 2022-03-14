import { Link } from 'react-router-dom'

export default function Services(props) {
  const renderedServices = props.dentalServices.map((dentalService, idx) =>{
    return (
      <li key={idx}>
        <Link to={`/services/${dentalService.id}`}>{dentalService.name}</Link>
      </li>
    ) 
  })
  return (
    <div>
      <h5>Hey check out our dental spa services!</h5>

      <ul>
        {renderedServices}
      </ul>
      
    </div>
  )
}