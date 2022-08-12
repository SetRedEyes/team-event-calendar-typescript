import { Navigate, Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'
import { privateRoutes, publicRoutes, RouteNames } from '../routes/routes'
import { getIsAuth } from '../store/auth/auth'

const AppRouter = () => {
  const isAuth = useAppSelector(getIsAuth())

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
