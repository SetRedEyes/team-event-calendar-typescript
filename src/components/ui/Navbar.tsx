import { Layout, Menu, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { RouteNames } from '../../routes/routes'
import { getIsAuth, getCurrentUserName } from '../../store/auth/auth'

const Navbar = () => {
  const { logout } = useAppDispatch()

  const navigate = useNavigate()
  const isAuth = useAppSelector(getIsAuth())
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
