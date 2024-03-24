import React from 'react'
import { Card, CardBody, CardFooter, Stack, Image, Heading, Button, ButtonGroup, Divider, Text } from '@chakra-ui//react'
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({nombre, descripcion, precio, imagen, id}) => {
  return (
    <Card maxW='sm' className='item'>
      <CardBody>
        <Image
          src={imagen}
          alt={nombre}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{descripcion}</Heading>
          <Text color='blue.600' fontSize='2x1'>
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/product/${id}`}>Ver detalle</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Item
