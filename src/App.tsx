import { Layout } from 'antd'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import './App.css'
import CurrentUserLoader from './components/hoc/CurrentUserLoader'

const App = () => {
  return (
    <CurrentUserLoader>
      <Layout>
        <Navbar />
        <Layout.Content>
          <AppRouter />
        </Layout.Content>
      </Layout>
    </CurrentUserLoader>
  )
}

export default App
