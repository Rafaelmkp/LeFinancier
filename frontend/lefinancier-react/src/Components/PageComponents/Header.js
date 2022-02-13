import React, { useState, useEffect } from 'react'

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
    <header className={classNames}>
      <h2>This is in a header</h2>
    </header>
  )
}
