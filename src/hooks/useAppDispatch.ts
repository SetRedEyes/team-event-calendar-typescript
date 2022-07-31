import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { dispatchActions } from '../store/reducers/auth/auth'
import { AppDispatch } from '../store/store'

export const useAppDispatch = () => {
  const appDispatch = useDispatch<AppDispatch>()
  return bindActionCreators(dispatchActions, appDispatch)
}
