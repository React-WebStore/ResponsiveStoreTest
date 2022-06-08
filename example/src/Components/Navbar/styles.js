import styled from 'styled-components'

export const NavbarContainer = styled.div`
  display: flex;
  padding: 0rem 1.5rem;
  align-items: center;
  gap: 1rem;
  height: 5rem;
  background: linear-gradient(to top, gray, lightgrey, rgba(255, 255, 255, 0));
  box-shadow: 0px 3px 5px black;
  > * {
    color: black;
    text-decoration: none;
  }
`
