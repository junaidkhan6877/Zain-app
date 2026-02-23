import React, { useState } from 'react'

const Zain = () => {
    const [ben,setBen]=useState('');

    const [junaid,setJunaid]=useState("red")
  return (
    <div>
      <div style={{backgroundColor:"green"}}>One</div>
      <input type="text"  placeholder='Only search' onChange={(e)=>setBen(e.target.value)} value={ben}/>
      <h1>{ben}</h1>
      <p>Muhammd zain naseer</p>
      <p>junaid</p>
<input type="text" placeholder='Search'  onChange={(e)=>setJunaid(e.target.value)} value={junaid}/>
<h2>{junaid}</h2>
      
    </div>
  )
}

export default Zain
