import React, { useState } from 'react'

const Zain = () => {
    const [ben,setBen]=useState('');
  return (
    <div>
      <div style={{backgroundColor:"green"}}>One</div>
      <input type="text"  placeholder='Only search' onChange={(e)=>setBen(e.target.value)} value={ben}/>
      <h1>{ben}</h1>
      <p>Muhammd zain naseer</p>
      <p>junaid</p>
    </div>
  )
}

export default Zain
