import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button, ListGroup, Card, Image } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'

const ProductScreen = ({ match }) => {
  const product = products.find(p => p._id === match.params.id)

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>
              <Col>price:</Col>
              <Col>
                <strong>${product.price}</strong>
              </Col>
            </ListGroup.Item>
            <ListGroup.Item>
              <Col>status:</Col>
              <Col>
                <strong>
                  {product.countInStock ? 'in stock' : 'out of stock'}
                </strong>
              </Col>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className='block-btn'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add to cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
