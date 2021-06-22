import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'antd'
import { useSetRecoilState } from 'recoil'
import * as Atoms from '../atoms/index'

const Header = (props: any) => {
  console.log(props);
  
  const setIsLoggedIn = useSetRecoilState(Atoms.loginState)
  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoggedIn(false)
  }  
  return (
    <Row justify='space-around' align='middle' className='header'>
      <Col><Link to='/dashboard'><h1>Todo App</h1></Link></Col>
      <Col><Button type='ghost' onClick={logout}>Logout</Button></Col>
    </Row>
  )
}

export default Header