import React from 'react';
import FormSignUp from '../Components/Form/FormSignUp';
import Page from './Page';
import SignUpSideInfo from '../Components/SignUpSideInfo';

import '../Style/signup.css';

export default function PageSignUp() {
  const submitForm = (userData) => {
    console.log("signed up!!");
  }

  return (
    <Page>
      <div className='row valign-wrapper' >
        <div className='col m6 l6 xl6'>
          <SignUpSideInfo />
        </div>
        <div className='col s12 m6 l6 xl6 light-blue-2 signup-form'>
          <div className='row'>
            <div className='col m2 l2 xl2' ></div>
            <div className='col s12 m10 l10 xl10'>
              <FormSignUp onSubmit={submitForm}/>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
