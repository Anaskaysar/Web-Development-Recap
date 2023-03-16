import React, { useState } from 'react'
import Names from "./data.json"
export default function JsonHandler() {
    const [query, setQuerry] = useState('');

    const changeHandler = (event) =>{
        setQuerry(event.target.value)
    }

    const filteredNames = Names.filter((item) => {
        return item.firstName.includes(query) || item.lastName.includes(query)
    } )

  return (
    <div>
        <input type="text" value={query} onChange={changeHandler}/>
      {
        filteredNames.map((item)=>{
            return <p key={item.id}>{item.firstName} {item.lastName}  </p>
        })
      }
    </div>
  )
}
