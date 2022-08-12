import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'

export interface CurrentUserLoaderProps {
  children: React.ReactNode
}

const CurrentUserLoader = ({ children }: CurrentUserLoaderProps) => {
  const { loadCurrentUser } = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      loadCurrentUser()
    }
  }, [])

  return <>{children}</>
}

export default CurrentUserLoader
