import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { validationRules } from '../utils/validationRules'
const LoginForm = () => {
  return (
    <Form style={{ width: '20rem' }}>
      <Form.Item
        name='username'
        rules={[validationRules.required( 'Please input your username!' )]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
        />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[validationRules.required('Please input your password!')]}
      >
        <Input
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Password'
        />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' block>
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
