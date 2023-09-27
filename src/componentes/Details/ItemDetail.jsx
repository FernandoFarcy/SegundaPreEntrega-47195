import React, { useEffect } from 'react'

const ItemDetail = ({item}) => {

   
  return (
    <div>
    <h5>{ item.title}</h5>
    <img src={item.image}/>
    <p>
        descripcion: {item.description}
    </p>
    <p>
        precio: {item.price}
    </p>
    <p>
        categoria: {item.category}
    </p>
    </div>
  )
}

export default ItemDetail