import React from 'react'
import ButtonForm from '../Button/ButtonForm';
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
    <Form onSubmit={(evt) => handleSubmit(evt)}>
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
      <ButtonForm type='submit' text='Sign Up' />
    </Form>
  )
}
