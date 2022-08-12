import Login from '../components/pages/Login'
import Event from '../components/pages/Event'

export interface IRoute {
  element: React.ComponentType
  path: string
}

export enum RouteNames {
  LOGIN = '/login',
  EVENT = '/'
}

export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, element: Login }]

export const privateRoutes: IRoute[] = [{ path: RouteNames.EVENT, element: Event }]
