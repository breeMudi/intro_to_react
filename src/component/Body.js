import React from 'react'

export default function Body(props) {
  return (
    <div>
      <p>Here is the {props.name}, {props.pronoun} works in {props.work}</p>
      {props.children}
    </div>
  )
}
