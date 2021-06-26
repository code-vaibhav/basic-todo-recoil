import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'antd'

const Header = (props: any) => {
  console.log(props);
  
  const logout = (_e: React.MouseEvent<HTMLButtonElement>) => {
    props.history.push('/')
  }  
  return (
    <Row justify='space-around' align='middle' className='header'>
      <Col><Link to='/dashboard'><h1>Todo App</h1></Link></Col>
      <Col><Button type='ghost' onClick={logout}>Logout</Button></Col>
    </Row>
  )
}

export default Header