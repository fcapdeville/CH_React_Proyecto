import React, { useState, useEffect } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../itemDetail/ItemDetail'
import { Spinner } from '@chakra-ui/react'

const ItemDetailContainer = () => {
  const [ product, setProduct ] = useState({});
  const [ loading, setLoading ] = useState(true)
  const { productId } = useParams()

  useEffect (() => {
    setLoading(true)
    getProductById(productId)
      .then((el) => setProduct(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  console.log(product)

  return (
    <div>
      {
        loading ?
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          /> :
          <>
            <ItemDetail {...product}/>
          </>
      }
    </div>
  )
}

export default ItemDetailContainer
