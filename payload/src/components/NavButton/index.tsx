import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

const NavButton: React.FC = () => {
  const href =
    '/admin/collections/pages?limit=10&page=1&where%5Bor%5D%5B0%5D%5Band%5D%5B0%5D%5Blikes%5D%5Bgreater_than%5D=0'
  return (
    <NavLink to={href} className={`customButton btn btn--style-primary btn--size-small`}>
      View liked posts
    </NavLink>
  )
}

export default NavButton
