import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  z-index: 999;

  height: 104px;
  padding-inline: max(calc(calc(100vw - 1120px) / 2), 0.69rem);
  margin: 0 auto;
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Badge = styled.div`
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  right: 0;
  top: 0;
  margin-left: 20px;
  font-weight: bold;
`
