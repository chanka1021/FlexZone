import React from 'react'
import "./styles/GlobaleTitle.css"
function GlobaleTitle(props) {
  return (
    <div className='titleContainer'><p className='p1'>{props.t1}</p><p className='p2'>{props.t2}</p></div>
  )
}

export default GlobaleTitle