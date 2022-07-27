import { Layout, Menu, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import { RouteNames } from '../routes/routes'
import { checkIsAuth } from '../store/reducers/auth/auth'

const Navbar = () => {
  const navigate = useNavigate()
  const { isAuth } = useAppSelector(checkIsAuth())

  const login = [
    {
      label: (
        <div
          style={{ width: '5rem', textAlign: 'center' }}
          onClick={() => navigate(RouteNames.LOGIN)}
        >
          Login
        </div>
      ),
      key: '1'
    }
  ]

  const exit = [
    {
      label: (
        <div
          style={{ width: '5rem', textAlign: 'center' }}
          onClick={() => console.log('EXIT')}
        >
          Exit
        </div>
      ),
      key: '2'
    }
  ]

  return (
    <Layout.Header>
      <Row justify='end'>
        {isAuth ? (
          <>
            <div style={{ color: 'white', width: '6rem' }}>SetRedEyes</div>
            <Menu
              theme='dark'
              mode='horizontal'
              items={exit}
              selectable={false}
            />
          </>
        ) : (
          <Menu
            theme='dark'
            mode='horizontal'
            items={login}
            selectable={false}
          />
        )}
      </Row>
    </Layout.Header>
  )
}

export default Navbar
