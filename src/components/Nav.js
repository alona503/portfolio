import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul className="nav left">
        <li>ALONAS</li>
      </ul>
      <ul className="nav right">
        <li className="navItem">
          <Link to="/">About</Link>
        </li>
        <li className="navItem">
          <Link to="/web">Web</Link>
        </li>
        <li className="navItem">
          <Link to="/qa">QA</Link>
        </li>
      </ul>
    </nav>
  )
}
