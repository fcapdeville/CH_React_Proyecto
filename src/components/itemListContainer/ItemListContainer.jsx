import React, { useEffect, useState } from 'react'
import { Heading } from '@chakra-ui/react'
import ItemList from '../itemList/ItemList'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'

import './itemListContainer.css'

const ItemListContainer = ({title}) => {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)
    const dataProducts = categoryId ? getProductsByCategory(categoryId): getProducts()

    dataProducts
      .then((el) => setData(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div className='itemListContainer' flexDirection="column">
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
            <ItemList data={data} />
          </>
      }
    </div>
  )
}

export default ItemListContainer
