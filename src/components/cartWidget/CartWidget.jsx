import React from 'react'
import { Box } from "@chakra-ui/react"
import { IoCartSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import './CartWidget.css'

const CartWidget = () => {
  return (
    <Box mr={3}>
      <Link to='/cart'>
        <IoCartSharp className='cartwidget'></IoCartSharp>
      </Link>
    </Box>
  )
}

export default CartWidget
