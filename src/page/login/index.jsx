import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { connect } from 'react-redux'
import { LoginApi } from '../../utils/api'
import { loginHome } from '../../action/login';

const Login = (props) => {
  console.log(props);
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    // LoginApi(values).then(res => {
    //   if(res.errCode === 0) {
    //     props.loginHome(res.data['cms-token'])
    //   }
    // })
      const res = props.loginHome(values);
      console.log(res);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/reg">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
        或者 <a href="/reg">立即注册</a>
      </Form.Item>
    </Form>
  );
};

export default connect(
  state => ({
    token: state
  }),
  {
    loginHome
  }
)(Login)