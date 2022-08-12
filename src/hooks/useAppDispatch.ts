import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { dispatchAuthActions } from '../store/auth/auth'
import { dispatchEventActions } from '../store/event/event'
import { AppDispatch } from '../store/store'

export const useAppDispatch = () => {
  const appDispatch = useDispatch<AppDispatch>()
  return bindActionCreators(
    { ...dispatchAuthActions, ...dispatchEventActions },
    appDispatch
  )
}
