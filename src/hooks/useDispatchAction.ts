import { useAppDispatch } from './redux'
import { bindActionCreators } from 'redux'
import * as allActions  from '../store/reducers/auth/auth'

export const useDispatchAction = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(allActions, dispatch)
}
