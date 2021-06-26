import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'antd'
import * as Atoms from '../atoms/index'
import { useSetRecoilState } from 'recoil'

const Header = (props: any) => {
  const setLoggedIn = useSetRecoilState(Atoms.loginState)
  
  const logout = (_e: React.MouseEvent<HTMLButtonElement>) => {
    setLoggedIn(false)
    props.history.push('/')
  }  
  return (
    <Row className='header'>
      <Col lg={{offset: 4, span: 16}} offset={2} span={20}>
        <Row justify='space-between' align='middle'>
          <Col><Link to='/dashboard'><h1>Todo App</h1></Link></Col>
          <Col><Button type='ghost' onClick={logout}>Logout</Button></Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Header