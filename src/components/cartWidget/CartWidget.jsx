import React from 'react'
import { IoCartSharp } from "react-icons/io5"
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div>
      <IoCartSharp className='cartwidget'></IoCartSharp>
      <p>Cant:</p>
    </div>
  )
}

export default CartWidget
