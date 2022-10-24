import { ActionsContainer, HeaderContainer, Badge } from './styles'
import Logo from '../../assets/logo.svg'
import IconButton from '../IconButton'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Coffee Delivery Logotipo" />
      </Link>
      <ActionsContainer>
        <IconButton icon={<MapPin weight="fill" size={22} />} position="left">
          Pinheiros, ES
        </IconButton>
        <Link to="/cart">
          <IconButton
            icon={<ShoppingCart weight="fill" size={22} />}
            position="left"
            variation="yellow"
          >
            {cart.totalCount > 0 && <Badge>{cart.totalCount}</Badge>}
          </IconButton>
        </Link>
      </ActionsContainer>
    </HeaderContainer>
  )
}
