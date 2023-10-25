import React from 'react'
import { FaBars } from 'react-icons/fa'
import "./baricon.scss";

const BarIcon = ({state,fun}) => {
  const handelClick = () =>{
    fun(!state);
  }
  return (
    <div className='baricon' onClick={handelClick}>
        <FaBars className='icon'/>
    </div>
  )
}

export default BarIcon