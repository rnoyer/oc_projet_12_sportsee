import './App.scss'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import { useParams } from 'react-router'

function App() {
  const { userId } = useParams()

  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard userId={userId} />
    </>
  )
}

export default App
