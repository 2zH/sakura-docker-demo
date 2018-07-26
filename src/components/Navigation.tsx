import * as React from 'react'
import styled from 'styled-components'

const Navigation: React.StatelessComponent = props => {
  const NavigationContainer = styled.ul`
    display: flex;
  `
  return (
    <nav>
      <NavigationContainer>
        { props.children }
      </NavigationContainer>
    </nav>
  )
}
const NavButton: React.StatelessComponent = props => {
  const Button = styled.li`
    list-style: none;
  `
  return (
    <Button>
      <a>{ props.children }</a>
    </Button>
  )
}
const AppNavigation: React.StatelessComponent = () => {
  return (
    <Navigation>
      <NavButton>Main</NavButton>
      <NavButton>Category</NavButton>
      <NavButton>Console</NavButton>
    </Navigation>
  )
}

export default AppNavigation