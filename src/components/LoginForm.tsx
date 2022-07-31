import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { validationRules } from '../utils/validationRules'
import { useAppSelector } from '../hooks/useAppSelector'
import {
  getAuthErrors,
  getAuthLoadingStatus
} from '../store/reducers/auth/auth'
import { useState } from 'react'
import { useAppDispatch } from '../hooks/useAppDispatch'
const LoginForm = () => {
  const { login } = useAppDispatch()

  const error = useAppSelector(getAuthErrors())
  const isLoading = useAppSelector(getAuthLoadingStatus())

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const submit = () => {
    login(userData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Form style={{ width: '20rem' }} onFinish={submit}>
      <Form.Item
        rules={[validationRules.required('Please input your username!')]}
      >
        <Input
          name='username'
          value={userData.username}
          onChange={(e) => handleChange(e)}
          placeholder='Username'
          prefix={<UserOutlined className='site-form-item-icon' />}
        />
      </Form.Item>

      <Form.Item
        rules={[validationRules.required('Please input your password!')]}
      >
        <Input.Password
          name='password'
          value={userData.password}
          onChange={(e) => handleChange(e)}
          placeholder='Password'
          prefix={<LockOutlined className='site-form-item-icon' />}
        />
      </Form.Item>

      <Form.Item style={{ marginBottom: '0.5rem' }}>
        <Button type='primary' htmlType='submit' block loading={isLoading}>
          Login
        </Button>
      </Form.Item>
      {error && (
        <Form.ErrorList
          errors={[
            <h4
              style={{
                color: 'red',
                textAlign: 'center',
                marginBottom: '0rem'
              }}
            >
              {error}
            </h4>
          ]}
        />
      )}
    </Form>
  )
}

export default LoginForm
