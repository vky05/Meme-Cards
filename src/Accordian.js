import React, { useState } from 'react'
import AccordianItem from './AccordianItem'

const data=[
    {
        title:"Accordion Item #1",
        body: "This is the first item's accordion body. It is shown by default, until thecollapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the' transition does limit overflow."
    },
    {
        title:"Accordion Item #2",
        body: "This is the first item's accordion body. It is shown by default, until thecollapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the' transition does limit overflow."
    },
    {
        title:"Accordion Item #3",
        body: "This is the first item's accordion body. It is shown by default, until thecollapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance,as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the' transition does limit overflow."
    }
]

const Accordian = () => {
    const [openIndex, setopenIndex] = useState(null);

  return (
    <div>
       {data.map((item, index)=>{
            return  <AccordianItem key={index} title={item.title} body={item.body} isOpen={index===openIndex} setisOpen={()=>{
                index===openIndex ? setopenIndex(null) : setopenIndex(index);
            } }/>
        })}
    </div>
  )
}

export default Accordian