import { Layout, Menu, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { useDispatchAction } from '../hooks/useDispatchAction'
import { RouteNames } from '../routes/routes'
import {
  checkIsAuth,
  getCurrentUserName,
  logout
} from '../store/reducers/auth/auth'

const Navbar = () => {
  const { logout } = useDispatchAction()

  const navigate = useNavigate()
  const isAuth = useAppSelector(checkIsAuth())
  const currentUsername = useAppSelector(getCurrentUserName())

  const handleLogout = () => {
    logout()
  }

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
          onClick={handleLogout}
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
            <div style={{ color: 'white', width: '6rem' }}>
              {currentUsername}
            </div>
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
