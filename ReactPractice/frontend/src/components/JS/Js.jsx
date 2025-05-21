import React from 'react'

const Js = () => {
    const js=[
        {
            id:1,
            name:"abhishek Kunwar",
            content:"hi i am abhshek"
        },
        {
            id:2,
            name:"radha vallbh",
            content:"hi i am radha "
        }
    ]
  return (
    <div className='js-container'>
        {js.map((js)=>(
            <div key={js.id} className='js-id'>
                <p> {js.name}</p>
                <h3> {js.content}</h3>

            </div>
        ))}
    </div>
  )
}

export default Js
