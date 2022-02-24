import React from 'react';
import Input from './Input';

export default function InputPhone({label, name, placeholder, disabled, required}) {
  return (
    <Input
      label={label}
      name={name}
      type='text'
      placeholder={placeholder}
      disabled={disabled}
      required={required}
    />
  )
}
