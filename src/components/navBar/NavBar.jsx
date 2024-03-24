import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Heading, Box } from '@chakra-ui/react'
import { TiArrowSortedDown } from "react-icons/ti"
import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <Box className='navbar' m={2}>
      <Heading>
        <Link to={'/'}>
          <img src='https://cdn5.dibujos.net/dibujos/pintados/202040/ordenador-3-profesiones-informatica-12017693.jpg'
          style={{ width: '130px' }} />
        </Link></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<TiArrowSortedDown/>}>
          Productos
        </MenuButton>
        <MenuList>
          <MenuItem><Link to={'/category/Accesorios'}>Accesorios</Link></MenuItem>
          <MenuItem><Link to={'/category/Fuentes'}>Fuentes</Link></MenuItem>
          <MenuItem><Link to={'/category/Monitores'}>Monitores</Link></MenuItem>
          <MenuItem><Link to={'/category/Motherboards'}>Motherboards</Link></MenuItem>
          <MenuItem><Link to={'/category/Placas de Video'}>Placas de Video</Link></MenuItem>
          <MenuItem><Link to={'/category/Memorias'}>Memorias</Link></MenuItem>
        </MenuList>
      </Menu>
      <CartWidget/>
    </Box>
  )
}

export default NavBar
