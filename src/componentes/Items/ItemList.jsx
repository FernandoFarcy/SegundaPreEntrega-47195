import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import Carditem from './Carditem';

const ItemList = ({ items }) => {
  return (
    <>
    {
        items.map( (item) => (
            <Col md={4} lg={3} xs={12} key={item.id}>
                <Carditem item={item} />
            </Col>
        ))
    }
    console.log(item)
    </>
  )
}

export default ItemList