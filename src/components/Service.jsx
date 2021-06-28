export default function Service(props) {
  console.log(props)
  if(!props.name) return <h1>{`I have never heard of a service called ${props.match.params.id} before 🤔`}</h1>
  return(
    <div>
     <h3>{props.name}</h3>

     <h6>{props.price}</h6>

     <p>{props.description}</p>
    </div>
  )
}