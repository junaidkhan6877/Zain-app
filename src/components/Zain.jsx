import React, { useState } from 'react'

const Zain = () => {
    const [ben,setBen]=useState('');
  return (
    <div>
      <input type="text"  placeholder='Only search' onChange={(e)=>setBen(e.target.value)} value={ben}/>
      <h1>{ben}</h1>
    </div>
  )
}

export default Zain
