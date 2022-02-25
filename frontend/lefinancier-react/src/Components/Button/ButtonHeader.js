import React from 'react'
import { Link } from 'react-router-dom';

export default function ButtonHeader({to, text}) {
  return (
    <Link className='button-header' to={to}>{text}</Link>
  )
}
