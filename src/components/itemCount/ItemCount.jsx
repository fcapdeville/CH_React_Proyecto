import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Heading } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = ({stock, initialValue, onAdd}) => {
    const { count, incrementar, decrementar } = useCounter(stock, initialValue)

  return (
    <div className="CounterContainer">
        <Button className='btnCount' colorScheme='blue' onClick={decrementar}>-</Button>
         <Heading p={2}>{count}</Heading>
        <Button className='btnCount' colorScheme='blue' onClick={incrementar}>+</Button>
        <Button colorScheme='blue' ml={2} onClick={() => onAdd(count)}>Agregar al carrito</Button>      
    </div>
  )
}

export default ItemCount
