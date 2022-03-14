import { useParams } from 'react-router-dom'

export default function Add() {
  const { x, y } = useParams()
  return <h1>the value {x} + {y} = {Number(x) + Number(y)}</h1>
}