import './App.scss'
import Header from '/src/components/dashboard/Header'
import Sidebar from '/src/components/dashboard/Sidebar'
import Dashboard from '/src/components/dashboard/Dashboard'
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
