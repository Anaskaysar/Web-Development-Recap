import React from 'react'

function Greet(props) {
  return (
    <div>
      <h1>Hello World From {props.name} {props.favHero}</h1>
      {props.children}
    </div>
  )
}

export default Greet
