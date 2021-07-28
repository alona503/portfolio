import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

export default function Footer() {
  return (
    <footer>
      <a href="https://www.facebook.com/alona.budovoi">
        <FacebookIcon />
      </a>
      <a href="https://linkedin.com/in/alona-budovoi-4959a9101">
        <LinkedInIcon />
      </a>
    </footer>
  )
}
