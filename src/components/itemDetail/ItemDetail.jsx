 import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({ categoria, descripcion, imagen, nombre, precio, stock }) => {
  const [ cantidad, setCantidad ] = useState(0)
  const onAdd = (quantity) => {
    console.log("Agregaste cantidad: " + quantity)
    setCantidad(quantity)
  }

  return (
    <Card maxW='md'>
      <CardHeader>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box>
              <Heading size='sm'>{nombre}</Heading>
              <Text>Categoría: {categoria}</Text>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            //icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{descripcion}</Text>
        <Text>${precio}</Text>
        <Text>Stock disponible: {stock}</Text>
      </CardBody>
      <Image
        objectFit='cover'
        src={imagen}
        alt='Chakra UI'
      />
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      >
      </CardFooter>
      {
        cantidad > 0 ? 
        <Link to='/cart'>Ir al carrito</Link> :
        <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
      }
    </Card>
  )
}

export default ItemDetail
