import React from 'react'
import InputEmail from '../Input/InputEmail';
import InputPhone from '../Input/InputPhone';
import InputText from '../Input/InputText';
import Form from './Form';

export default function FormSignUp({onSubmit}) {
  const handleSubmit = (evt) => {
    onSubmit && onSubmit();
    evt.preventDefault();
  }

  return (
    <Form className='col s12 m12 l12 xl12' onSubmit={(evt) => handleSubmit(evt)}>
      <InputText
        label='Username'
        name='username'
        placeholder='Insert your username'
        required={true}
      />
      <InputEmail 
        label='E-mail'
        name='email'
        placeholder='Insert your e-mail'
        required={true}
      />
      <InputPhone 
        label='Phone'
        name='phone'
        placeholder='Insert your phone number'
        required={true}
      />
      <input type="submit"/>
    </Form>
  )
}
