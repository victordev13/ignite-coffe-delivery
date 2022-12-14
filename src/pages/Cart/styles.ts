import styled from 'styled-components'

export const Container = styled.form`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;

  gap: 32px;

  > div:last-child {
    max-width: 448px;
  }

  > div:first-child {
    min-width: 300px;
    max-width: 640px;
  }

  > div {
    width: 100%;
    flex: 1;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
  }
`

export const FormGroup = styled.div`
  flex: 1;
  display: flex;
  gap: 0.75rem;
`

const BaseCard = styled.section`
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;

  header {
    display: grid;
    line-height: 1.4rem;
    grid-template-columns: 28px 1fr;
    grid-template-areas:
      'icon title'
      'icon description';

    span {
      grid-area: title;
    }

    p {
      grid-area: description;
    }

    svg {
      grid-area: icon;
    }
  }
`

export const AddressContainer = styled(BaseCard)``
export const PaymentContainer = styled(BaseCard)`
  margin-top: 12px;

  input {
    display: none;
  }

  > div {
    display: inline-flex;
    gap: 12px;
  }
`
export const CartItemsContainer = styled(BaseCard)`
  font-size: 1rem;

  button[type='submit'] {
    width: 100%;
    background: ${({ theme }) => theme.colors.yellow};
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    text-transform: uppercase;
    font-weight: bold;
  }

  button[type='submit']:disabled {
    opacity: 0.7;
  }

  line-height: 2rem;
  position: relative;

  span.absolute {
    position: absolute;
    right: 40px;
  }

  .bold {
    font-weight: 700;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 20px;
    border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
    padding-bottom: 24px;
  }

  img {
    width: 64px;
    height: 64px;
  }
`

export const CartItemOptions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 13.5px;
  gap: 0;

  > div {
    width: 100%;

    display: inline-flex;
    justify-content: space-between;
  }
`

export const PaymentOption = styled.button<{ selected?: boolean }>`
  border: 1px solid
    ${({ theme, selected }) =>
      selected ? theme.colors['purple-dark'] : 'transparent'};
  position: relative;
  padding: 10px;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors['base-button']};

  color: ${({ theme }) => theme.colors['purple-dark']};

  :focus {
    box-shadow: none;
  }

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  svg {
    margin: 0 4px;
    vertical-align: middle;
    color: ${({ theme }) => theme.colors['purple-dark']};
  }
`
