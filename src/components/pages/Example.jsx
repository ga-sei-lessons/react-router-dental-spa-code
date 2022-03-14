import { useParams } from 'react-router-dom'

export default function Example() {
  const { id, otherId } = useParams()
  return <h1> id: {id} otherId: {otherId}</h1>
}