import { Layout } from 'antd'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import './App.css'
import { useEffect } from 'react'
import { useDispatchAction } from './hooks/useDispatchAction'

const App = () => {
  const { checkIsAuth, loadCurrentUser } = useDispatchAction()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      loadCurrentUser()
    
    }
  }, [])
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App
