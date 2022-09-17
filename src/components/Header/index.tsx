import { ActionsContainer, HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import IconButton from '../IconButton'
import { MapPin, ShoppingCart } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery Logotipo" />
      <ActionsContainer>
        <IconButton icon={<MapPin weight="fill" size={22} />} position="left">
          Pinheiros, ES
        </IconButton>
        <IconButton
          icon={<ShoppingCart weight="fill" size={22} />}
          position="left"
          variation="yellow"
        />
      </ActionsContainer>
    </HeaderContainer>
  )
}
