import React from 'react'

export default function CondRender() {
    const isLoggedin = true;
  return (
    <div>
      <h1>Welcome {isLoggedin? 'Kaysar':'Guest'} </h1>
    </div>
  )
}
