import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/qa">QA</Link>
        </li>
        <li>
          <Link to="/web">Web</Link>
        </li>
      </ul>
    </nav>
  )
}
