import * as React from "react";
import { Input, Button, Form, Checkbox } from "antd";
import { UserOutlined } from "@ant-design/icons";
import * as Atoms from '../atoms/index'
import "../styles/login.css";
import { useSetRecoilState } from "recoil";

const LoginPage = ({history}: any) => {
  const setLoggedIn = useSetRecoilState(Atoms.loginState)
  
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
    setLoggedIn(true)
    history.push('/dashboard')
  };
  
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  };

  return (
    <div className='login'>
      <h1>User Login</h1>
      <Form
        {...layout}
        initialValues={{ remember: true }}
        onFinish={onFormSubmit}
        className='login__form'
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input addonAfter={<UserOutlined />}/>
        </Form.Item>

        <Form.Item
          label="password"
          name="password"
          rules={[{ required: true, message: "please input your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
