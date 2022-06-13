import styled from 'styled-components'

export const Container = styled.div`
  max-height: 50rem;
  overflow: scroll;
`

export const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  > h1 {
    text-shadow: 2px 2px 2px gray;
  }
`
