import logo from '../../assets/meet.png'
import { useProfile } from '../../context/ProfileContext'
import './Header.css'

const Header = () => {
  const { user } = useProfile()
  const { name, color } = user
  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${color}` }}>{name}</span>!
      </p>
    </header>
  )
}

export default Header
