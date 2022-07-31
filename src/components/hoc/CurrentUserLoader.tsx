import React, { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export interface ICurrentUserLoader {
  children: React.ReactNode
}

const CurrentUserLoader = ({ children }: ICurrentUserLoader) => {
  const { loadCurrentUser } = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      loadCurrentUser()
    }
  }, [])

  return <>{children}</>
}

export default CurrentUserLoader
