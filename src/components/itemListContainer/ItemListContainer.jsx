import React from 'react'
import { Heading } from '@chakra-ui/react'
import './itemListContainer.css'

const ItemListContainer = ({title}) => {
  return (
    <div className='itemListContainer'>
      <Heading>{title}</Heading>
    </div>
  )
}

export default ItemListContainer
