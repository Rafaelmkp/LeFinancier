import React, { useState, useEffect } from 'react'
import ButtonHeader from '../Button/ButtonHeader';

export default function Header() {
  const [isScrollOnTop, setIsScrollOnTop] = useState(true);
  const [classNames, setClassNames] = useState('header light-purple-1');

  const handleScroll = () => {
    const isScrollOnTop = window.scrollY === 0;
    setIsScrollOnTop(isScrollOnTop);
    setClassNames(isScrollOnTop ? 'header light-purple-1' : 'header shadow light-purple-1 ');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${classNames} header`}>
      <h2>This is in a header</h2>
      <div className='menu-header'>
        <ButtonHeader to='/' text='Home'/>
        <ButtonHeader to='/' text='About' />
        <ButtonHeader to='/' text='Help' />
        <ButtonHeader to='/' text='Help' />
      </div>
    </header>
  )
}
