import { Layout, Row } from 'antd'
import Card from 'antd/lib/card/Card'
import LoginForm from '../components/LoginForm'

const Login = () => {
  return (
    <Layout>
      <Row justify='center' align='middle' className='h100'>
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  )
}

export default Login
