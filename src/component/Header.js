import React from 'react'

export default function Header() {
  const items = [
    'Home', 'About', 'Contact Us', 'Feedback'
  ]
  return (
    <div>
      <p>This is my first self done header</p>
      <ul className='navigation'>{items.map((item) => {return <li key={item}>{item}</li>})}</ul>
    </div>
  )
}


