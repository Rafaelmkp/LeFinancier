import { Link } from 'react-router-dom';
import React from 'react'

export default function Button({text, to}) {
  return (
    <Link className='button' to={to}>{text}</Link>
  )
}
