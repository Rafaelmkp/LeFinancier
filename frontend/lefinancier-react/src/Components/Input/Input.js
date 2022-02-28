 import React, { useState } from 'react';


export default function Input({label, name, type, placeholder, disabled, required, value, onChange}) {
  const [mValue, setMValue] = useState(value || '');
  const handleChange = (value) => {
    setMValue(value);
    onChange && onChange(name, value);
  }

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
        onChange={(evt) => handleChange(evt.target.value)}
        value={mValue}
      />
    </div>
  );
}
