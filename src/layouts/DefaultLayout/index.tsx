import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <p>header</p>
      <Outlet />
    </LayoutContainer>
  )
}
