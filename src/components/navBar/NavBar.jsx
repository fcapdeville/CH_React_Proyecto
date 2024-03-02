import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { TiArrowSortedDown } from "react-icons/ti"
import CartWidget from '../cartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src='https://cdn5.dibujos.net/dibujos/pintados/202040/ordenador-3-profesiones-informatica-12017693.jpg'
        style={{ width: '130px' }} />
      </div>
      <Menu>
        <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
          Productos
        </MenuButton>
        <MenuList>
          <MenuItem>Accesorios</MenuItem>
          <MenuItem>Fuentes</MenuItem>
          <MenuItem>Monitores</MenuItem>
          <MenuItem>Motherboards</MenuItem>
          <MenuItem>Placas de Video</MenuItem>
          <MenuItem>Memorias</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget/>
    </div>
  )
}

export default NavBar
