import React from 'react';
import Input from './Input';

export default function InputText({label, name, placeholder, disabled, required}) {
  return (
    <div className='input-field'>
      <Input
        name={name}
        type='text'
        placeholder={placeholder}
        disabled={disabled}
        required={required}
      />
      <label htmlFor={name}>
        {label}
      </label>
    </div>
  )
}
