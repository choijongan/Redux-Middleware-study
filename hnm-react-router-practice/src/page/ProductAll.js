import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../component/ProductCard'
import { productAction } from '../redux/actions/productAction' 
import { useDispatch, useSelector } from 'react-redux'

const ProductAll = () => {
    // const [ProductList,setProductList]=useState([])
    // const ProductList = useSelector((state) => state.ProductList) 
    const ProductList = useSelector((state) => state.product.ProductList)//어떤 reducer의 state를 읽어올지 얘기해야됨. combineReducer를 썻다면 언급을 해줘야됨.
    const [query, setQuery] = useSearchParams()
    const dispatch = useDispatch()
    const getProducts =  () => {
      let searchQuery = query.get('q') || ''
      dispatch(productAction.getProducts(searchQuery))
      // let url = `http://localhost:5000/products?q=${searchQuery}` //json-server제공 기능. q 서치
      // let response = await fetch(url)
      // let data = await response.json()
      // setProductList(data)
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