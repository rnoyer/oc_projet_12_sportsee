import './NavIcon.scss'
import { Link } from 'react-router'

function NavIcon( {iconPath, bgColor, iconSize = 'small'} ) {
  const colorWithOpacity = bgColor ? `${bgColor}1A` : '#FFFFFF'
  const iconSizeCSS = iconSize === 'medium' ? 'medium-icon' : 'small-icon'

  return (
    <div className={`nav-icon ${iconSizeCSS}`} style={{background: colorWithOpacity}}>
        <img className='icon' src={iconPath} alt="icone" />
    </div>
  )
}

export default NavIcon