import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  align-items: center;
  width: 100%;
  max-width: 256px;
  text-align: center;

  padding: 24px;

  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 5px;
  border-top-right-radius: 13%;
  border-bottom-left-radius: 15%;

  img {
    margin-top: -40px;
  }
`

export const CardContent = styled.div`
  position: relative;

  p {
    font-size: 10.5pt;
    color: ${({ theme }) => theme.colors['base-label']};
  }

  a {
    display: block;
    margin-top: 15px;
  }
`

export const Tag = styled.div`
  display: inline-block;

  margin: 2px;
  padding: 4px 8px;
  border-radius: 50px;
  font-size: 6pt;
  font-weight: 700;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors['yellow-dark']};
  background-color: ${({ theme }) => theme.colors['yellow-light']};
`

export const Title = styled.h4`
  font-size: 14pt;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-title']};

  margin: 8px 0;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 23px;

  margin-top: 33px;

  > div {
    display: inline-flex;
    gap: 8px;
  }

  p {
    font-family: ${({ theme }) => theme.fonts.header};
    font-weight: 800;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors['base-text']};

    span {
      font-family: ${({ theme }) => theme.fonts.text};
      font-weight: 400;
      font-size: 0.9rem;
    }
  }
`
