import './Header.scss'
import { Link } from 'react-router'
import logo from '/src/assets/logo.svg'

function Header() {

  return (
    <header className='header'>
      <img src={logo} alt="" />
      <nav className="navbar">
        <ul>
          <li><Link to="#" className='link'>Accueil</Link></li>
          <li><Link to="#" className='link'>Profil</Link></li>
          <li><Link to="#" className='link'>Réglage</Link></li>
          <li><Link to="#" className='link'>Communauté</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header