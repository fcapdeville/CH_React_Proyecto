import React from 'react'
import Item from '../item/Item'
import './ItemList.css'

const ItemList = ({ data }) => {
  return (
    <div>
      {console.log(data)}
      {data.map((el) => (
        <div key={el.id} className='itemList'>
          <Item { ...el}/>
        </div>
      ))}
    </div>
  )
}

export default ItemList

