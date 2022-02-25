import React from 'react'

export default function ButtonInput({type, text}) {
  return (
    <input  className='button-form txt-white-1' type={type} value={text.toUpperCase()}/>
  )
}
