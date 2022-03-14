import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Go Home</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us!</Link>
        </li>

        <li>
          <Link to="/services">See Our Services</Link>
        </li>
      </ul>
    </nav>
  )
}