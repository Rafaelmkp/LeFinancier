import React from 'react';
import Input from './Input';

export default function InputEmail({
  label, 
  name, 
  placeholder, 
  disabled, 
  required, 
  onChange,
  value
}) {
  return (
    <Input 
      label={label}
      name={name}
      type='email'
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      onChange={onChange}
      value={value}
    />
  )
}
