import React, { useState } from 'react'
import ButtonForm from '../Button/ButtonForm';
import InputEmail from '../Input/InputEmail';
import InputPhone from '../Input/InputPhone';
import InputText from '../Input/InputText';
import Form from './Form';

export default function FormSignUp({onSubmit}) {
  const [userData, setUserData] = useState({});

  const handleFieldChange = (prop, value) => {
    console.log(`${prop} changed - ${value}`);
    userData[prop] = value;
    setUserData(userData);
  }

  const handleSubmit = (evt) => {
    onSubmit && onSubmit(userData);
    evt.preventDefault();
  }

  return (
    <Form onSubmit={(evt) => handleSubmit(evt)}>
      <InputText
        label='Username'
        name='username'
        placeholder='Insert your username'
        required={true}
        onChange={handleFieldChange}
        value={userData.username}
      />
      <InputEmail 
        label='E-mail'
        name='email'
        placeholder='Insert your e-mail'
        required={true}
        onChange={handleFieldChange}
        value={userData.email}
      />
      <InputPhone 
        label='Phone'
        name='phone'
        placeholder='Insert your phone number'
        required={true}
        onChange={handleFieldChange}
        value={userData.phone}
      />
      <div className='form-button-wrapper'>
        <ButtonForm type='submit' text='Sign Up' />
        <ButtonForm type='reset' text='Clear' />
      </div>
    </Form>
  )
}
