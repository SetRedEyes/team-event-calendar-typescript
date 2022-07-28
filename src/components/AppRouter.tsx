import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import { privateRoutes, publicRoutes, RouteNames } from '../routes/routes'
import { checkIsAuth } from '../store/reducers/auth/auth'

const AppRouter = () => {
  const isAuth = useAppSelector(checkIsAuth())

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )
      })}
      <Route
        path={RouteNames.LOGIN}
        element={<Navigate to={RouteNames.EVENT} replace />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )
      })}
      <Route
        path={RouteNames.EVENT}
        element={<Navigate to={RouteNames.LOGIN} replace />}
      />
    </Routes>
  )
}

export default AppRouter
