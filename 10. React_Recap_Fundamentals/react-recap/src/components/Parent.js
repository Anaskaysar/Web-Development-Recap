import React from 'react'
import Child from './Child'

export default function Parent() {
    const greetParrent = (childName) => {
        alert(`Hello Parent ${childName}`)
    }
  return <Child greetHandler = {greetParrent}/>
  
}
