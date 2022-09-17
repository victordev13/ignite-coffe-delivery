import { ActionsContainer, HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import IconButton from '../IconButton'
import { MapPin } from 'phosphor-react'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffee Delivery Logotipo" />
      <ActionsContainer>
        <IconButton icon={<MapPin weight="fill" />} position="left">
          Porto Alegre, RS
        </IconButton>
        <IconButton
          icon={<MapPin weight="fill" />}
          position="left"
          variation="yellow"
        />
      </ActionsContainer>
    </HeaderContainer>
  )
}
