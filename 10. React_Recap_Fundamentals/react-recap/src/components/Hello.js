import React, { useState } from 'react'

export default function Hello(Props) {

  const [message, setMessage ] = useState('Welcome Visitor');

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={()=>{setMessage('Subscribed')}}>Subscribe</button>
    </div>
  )
}
