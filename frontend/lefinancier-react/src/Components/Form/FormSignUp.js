import React from 'react'
import InputText from '../Input/InputText';
import Form from './Form';

export default function FormSignUp() {
  return (
    <Form className='col s10 m6 l6 xl6' >
      <InputText
        labael='Username'
        name='username'
        placeholder='Insert your username'
        required={true}
      />
    </Form>
  )
}
