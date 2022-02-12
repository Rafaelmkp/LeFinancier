import React from 'react'

export default function Input({name, type, placeholder, disabled, required}) {
  return (
    <input 
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    />
  );
}
