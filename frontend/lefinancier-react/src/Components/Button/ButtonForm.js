import React from 'react'

export default function ButtonInput({type, text}) {
  return (
    <input  className='button-form' type={type} value={text}/>
  )
}
