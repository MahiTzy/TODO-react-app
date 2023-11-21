import React, { useState } from 'react';

export default function BoxCard({children}) {
    const [show,setShow]=useState(true);
  return (
    <div>
    <div className='Box'>
      {show && children}
    </div>
    <button onClick={()=>setShow(!show)}>Hide/Show</button>
    </div>
  )
}
