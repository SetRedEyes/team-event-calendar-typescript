import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../routes/routes'

const AppRouter = () => {
  const auth = true
  return auth ? (
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
