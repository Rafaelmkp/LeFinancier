import React from 'react'

export default function ContentWrapper({children, className}) {
  return (
    <main className={`row ${className}`}>
      <div className='col m1 l2 xl2' ></div>
      <div className='col s12 m10 l8 xl8' >
        {children}
      </div>
      <div className='col m1 l2 xl2' ></div>
    </main>
  )
}
