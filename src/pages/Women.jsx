import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from '../componentes/Items/ItemList';
import useFetch from '../hooks/useFetch';

const Women = () => {
  const [items] = useFetch(`https://fakestoreapi.com/products/category/women's clothing`)

  return (

    <Container>
        <Row>
            {
                items !== null &&
                <ItemList items={items} />
            }
            
   
        </Row>
    </Container>
  )
}
export default Women

