import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../component/ProductCard'

const ProductAll = () => {
    const [ProductList,setProductList]=useState([])
    const [query, setQuery] = useSearchParams()
    const getProducts= async () => {
      let searchQuery = query.get('q') || ''
      let url = `http://localhost:5000/products?q=${searchQuery}` //json-server제공 기능. q 서치
      let response = await fetch(url)
      let data = await response.json()
      setProductList(data)
    }
    useEffect(()=>{
      getProducts()
    }, [query]) //어레이 안에다가 query를 넣어주면 query가 바뀔때마다 다시 호출해줌.
  return (
    <div>
          <Container>
              <Row>
                {ProductList.map((menu) => (
                  <Col lg={3}>
                    <ProductCard item={menu}/>
                  </Col>
                ))}
              </Row>
          </Container>
    </div>
  )
}

export default ProductAll