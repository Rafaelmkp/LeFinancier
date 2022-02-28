import React from 'react';
import Input from './Input';

export default function InputText({label, name, placeholder, disabled, required, onChange, value}) {
  return (
    <Input
      label={label}
      name={name}
      type='text'
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      onChange={onChange}
      value={value}
    />
  )
}
