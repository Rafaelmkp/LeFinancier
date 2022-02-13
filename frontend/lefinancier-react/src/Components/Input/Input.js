import React from 'react'

export default function Input({label, name, type, placeholder, disabled, required}) {
  return (
    <div className='input-field'>
      <label htmlFor={name}>
        {label}
      </label>
      <input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
    </div>
  );
}
