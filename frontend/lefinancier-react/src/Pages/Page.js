import React from 'react'
import Header from '../Components/PageComponents/Header';
import ContentWrapper from '../Components/PageComponents/ContentWrapper';

export default function Page({children}) {
  return (
    <React.Fragment>
      <Header />
      <ContentWrapper className='main main-margin-top'>
        {children}
      </ContentWrapper>
    </React.Fragment>
  )
}
