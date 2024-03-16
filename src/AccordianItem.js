import React, { useState } from 'react'

const AccordianItem = ({title, body, isOpen, setisOpen}) => {
  //const [isOpen,setisOpen] = useState(false);
  return (
    <div className='border border-black rounded-md'>
     <div className='font-bold p-2 bg-slate-200 flex justify-between' onClick={()=>{setisOpen((isOpen)=> !isOpen)}}>
        <span>{title}</span>
        <span>⬇️</span>
     </div>
    {isOpen && <div className='p-2'>{body}</div>}
    </div>
  )
}

export default AccordianItem