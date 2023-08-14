import React from 'react'
import { navLinksList } from './constants'

function Navigation() {
  return (
    <ul>
      {navLinksList.map((link) => <li key={link}>{link}</li>)}
    </ul>
  )
}

export default Navigation