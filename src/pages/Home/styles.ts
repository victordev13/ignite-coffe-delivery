import styled from 'styled-components'
import HomeBackground from '../../assets/home-background.png'

import { defaultTheme } from '../../styles/themes/default'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 2.3rem;
  height: calc(100vh - 104px);

  h1 {
    font-size: 3rem;
    line-height: 62.4px;
    color: ${(props) => props.theme.colors['base-title']};
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  padding: 0 10px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0.69rem;

    > div {
      width: 100%;
    }
  }
`

export const Background = styled.div`
  background: url(${HomeBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  filter: blur(80px);
  z-index: -1;

  width: 100%;
  height: calc(100% - 104px);
  position: absolute;
  right: auto;
`

export const ItemsContainer = styled.div`
  margin-top: 3.75rem;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    row-gap: 20px;
  }

  ul li {
    width: 50%;
    font-size: 1rem;
    font-weight: 400;
    align-items: center;
    display: inline-flex;
  }
`
const { colors } = defaultTheme

export const IconContainer = styled.div<{ bg: keyof typeof colors }>`
  width: 32px;
  height: 32px;
  background-color: ${({ theme, bg }) => theme.colors[bg]};

  border-radius: 50%;
  padding: 8px;

  margin-right: 12px;
`
