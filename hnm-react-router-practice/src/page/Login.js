import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = ({setAuthenticate}) => {
  const [id,setId]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginUser = (event) => {
    event.preventDefault()
    // setAuthenticate(true)
    dispatch(authenticateAction.login(id,password))
    navigate('/')
  }
 return (
  <Container>
    <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" placeholder="이메일을 입력해주세요." onChange={(event)=>setId(event.target.value)} />
        <Form.Text className="text-muted">
          귀하의 이메일을 다른 사람과 공유하지 않습니다.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호를 입력해주세요." onChange={(event)=>setPassword(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="자동로그인 방지" />
      </Form.Group>
      <Button variant="danger" type="submit">
        로그인
      </Button>
     </Form>
    </Container>
  )
}

export default Login